import axios from "axios";
import router from "@/router";
import store from "@/store";

export async function addData(path, data) {
  await store.dispatch("loadingModule/setLoading", true);
  const formData = new FormData();
  formData.append("id", data.id);
  formData.append("title", data.title);
  formData.append("subtitle", data.subtitle);
  formData.append("description", data.description);
  formData.append("content", data.content);
  formData.append("file", data.file);
  if (data.bg_file) {
    formData.append("bg_file", data.bg_file);
  }
  try {
    await axios.post(path, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    await router.replace({ path: "/admin/" + path + "s" });
    await store.dispatch("toast/success", "Data saved successfully");
  } catch (error) {
    await store.dispatch("toast/error", "Error saving data");
  } finally {
    await store.dispatch("loadingModule/setLoading", false);
  }
}

// export async function removeData(path, data) {
//   await store.dispatch("loadingModule/setLoading", true);
//   const formData = new FormData();
//   formData.append("id", data.id);
//   formData.append("title", data.title);
//   formData.append("subtitle", data.subtitle);
//   formData.append("description", data.description);
//   formData.append("content", data.content);
//   formData.append("file", data.file);
//   if (data.bg_file) {
//     formData.append("bg_file", data.bg_file);
//   }
//   try {
//     const response = await axios.post(path, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     console.log(data + "saved:", response.data);
//     await router.replace({ path: "/admin/" + path + "s" });
//   } catch (error) {
//     console.error(`Error uploading ${data}:`, error);
//   } finally {
//     await store.dispatch("loadingModule/setLoading", false);
//   }
// }
