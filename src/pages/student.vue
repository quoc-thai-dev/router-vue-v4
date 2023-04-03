<template>
  <h1>This is student page</h1>
  <ul v-if="students.length != 0" style="list-style-type: none">
    <li v-for="stu in students" :value="stu.id" :key="stu.id">
      {{ stu.id + ". " + stu.name }}
    </li>
  </ul>
  <div v-if="students.length == 0 && errors == ''">Loading....</div>
  <p v-if="errors" style="color: red; font-weight: bold">{{ errors }}</p>
</template>

<script>
import usesStudents from "@/uses/fetchStudents";
export default {
  name: "StudentPage",
  setup() {
    const { students, getAllStudent, errors } = usesStudents();

    getAllStudent();
    return { students, errors };
  },
};
</script>
