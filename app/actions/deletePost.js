'use server'



import {createSupabaseServerClient} from '@/utils/supabase/actions'
async function deletePost() {
       const supabase =await createSupabaseServerClient(filePath)
       try {
     
        const { error } = await supabase.storage.from('photos').remove([filePath]);
        if (error) {
            console.error('Error deleting file:', error.message);
            return false; 
        }
        console.log('File deleted successfully');
        return true; 
    } catch (error) {
        console.error('Error deleting file:', error.message);
        return false; 
    }
}






export default deletePost