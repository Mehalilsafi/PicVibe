'use server'
import {createSupabaseServerClient} from '@/utils/supabase/actions'
import { revalidatePath } from "next/cache";

function extractFilePath(url){
    const parts = url.split('/user_uploads/')
    if (parts.length < 2){
        console.error('Invalid URL format')
        return ''
    }
    let filePath = parts[1];
    if (filePath.includes('?')){
        filePath = filePath.split('?')[0]
    }
    return `user_uploads/${filePath}`
}
async function deletePost(formData) {
       const src = formData.get('photopath');
       let filePath = extractFilePath(src)
       const supabase =await createSupabaseServerClient()
 
       try {  
     
        const { error } = await supabase.storage.from('photos').remove([filePath]);
        if (error) {
            console.error('Error deleting file:', error.message);
            return false; 
        }
        revalidatePath('/hero')
        console.log('File deleted successfully');
        return true; 
    } catch (error) {
        console.error('Error deleting file:', error.message);
        return false; 
    }
}






export default deletePost