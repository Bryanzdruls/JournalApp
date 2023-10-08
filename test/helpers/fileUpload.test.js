import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name:'dffa09th9',
    api_key:'249736664764789',
    api_secret:'8cxdQeS9EqJeeq6VfX7FBFxl6oQ',
    secure: true,
});

describe('pruebas en fileUpload', () => {
  
    test('debe de subir el archivo correctamente a cloudinary', async () => {
      
        const imageUrl ='https://upload.wikimedia.org/wikipedia/commons/7/7a/Ren%C3%A9_Higuita%2C_2007.jpg';
        const resp =await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg', '');

        await cloudinary.api.delete_resources(['journal/'+imageId]);

    })

    test('debe de retornar null',  async () => {
      

        const file = new File([], 'foto.jpg');
        
        const url = await fileUpload( file );
        
        expect( url ).toBe(null);

    })
    
})
