import {ref} from 'vue';
import axios from 'axios'
export default function(){
    const students = ref([]);
    const errors=ref("");
    const getAllStudent = () => {
    axios
        .get("http://localhost:3000/students")
        .then((res) => (students.value = res.data))
        .catch(function(error){
            errors.value=error.message
        });
    };
    return { getAllStudent, students, errors };
}