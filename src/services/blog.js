import store from "@/store"; // Import the Vuex store instance
import axios from "axios";
import router from "@/router";

export async function submit(blog) {
  await store.dispatch("setLoading", true);
  const formData = new FormData();
  formData.append("id", blog.id);
  formData.append("title", blog.title);
  formData.append("subtitle", blog.subtitle);
  formData.append("description", blog.description);
  formData.append("content", blog.content);
  formData.append("file", blog.file);
  try {
    const response = await axios.post("http://localhost:3000/blog", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Blog saved:", response.data);
    await router.replace({ path: "/admin/blogs" });
  } catch (error) {
    console.error("Error uploading blog:", error);
  }
  await store.dispatch("setLoading", false);
}
