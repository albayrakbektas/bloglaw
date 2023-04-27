<template>
  <div>
    <input type="file" @change="onFileChange" multiple />
    <div class="row">
      <div v-for="(fileData, index) in filesData" :key="index" class="col-12 col-md-4">
        <img :src="fileData.fileUrl" alt="" class="img-thumbnail" />
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" v-model="fileData.title" />
        </div>
        <div class="form-group">
          <label>Subtitle</label>
          <input type="text" class="form-control" v-model="fileData.subtitle" />
        </div>
        <div class="form-group">
          <label>Description</label>
          <input type="text" class="form-control" v-model="fileData.description" />
        </div>
        <div class="form-group">
          <label>Content</label>
          <textarea class="form-control" rows="3" v-model="fileData.content"></textarea>
        </div>
      </div>
    </div>
    <button class="btn btn-primary" @click="uploadFiles">Upload</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      filesData: [],
    };
  },
  methods: {
    onFileChange(event) {
      const files = event.target.files || event.dataTransfer.files;
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.filesData.push({
            file,
            fileUrl: e.target.result,
            title: '',
            subtitle: '',
            description: '',
            content: '',
          });
        };
        reader.readAsDataURL(file);
      });
    },
    async uploadFiles() {
      const path = 'sliders';
      const uploadPromises = this.filesData.map(async (fileData) => {
        const formData = new FormData();
        formData.append('title', fileData.title);
        formData.append('subtitle', fileData.subtitle);
        formData.append('description', fileData.description);
        formData.append('content', fileData.content);
        formData.append('file', fileData.file);

        await axios.post(path, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      });

      try {
        await Promise.all(uploadPromises);
        await this.$store.dispatch('toast/success', 'Data saved successfully');
      } catch (error) {
        await this.$store.dispatch('toast/error', 'Error saving data');
      } finally {
        await this.$store.dispatch('loadingModule/setLoading', false);
      }
    },
  },
};
</script>
