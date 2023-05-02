import restApi from "../config/restApi"

export const getCourses = (params) => {
    return restApi.get("/courses")
}

export const addCourse = (payload) => {
    return restApi.post("/courses", payload)
}

export const editCourse = (payload, id) => {
  return restApi.put(`/courses/${id}`, payload)
};
export const deleteCourse = (id) => {
  return restApi.delete(`/courses/${id}`);
};
export const getCourseType = (params) => {
  
};

