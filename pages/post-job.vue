<template>
  <div class="flex flex-col items-center h-full min-h-screen p-4">
    <div class="w-full max-w-screen-lg relative">
      <navigation active-page="post" />
      <p class="mt-3 text-white">
        Get exposure by publishing what you are looking for in our 2-minutes
        form. Really simple!
      </p>
      <form class="mt-3" @submit.prevent="createJob">
        <div class="flex flex-col">
          <form-input
            label="Job Title"
            type="text"
            name="jobTitle"
            placeholder="Software Engineer"
            :required="true"
            v-model="job.jobTitle"
          />
          <form-input
            label="Company Name"
            type="text"
            name="companyName"
            placeholder="Software Inc"
            :required="true"
            v-model="job.companyName"
          />
          <form-input
            label="Application URL"
            type="text"
            name="applicationUrl"
            placeholder="https://lever.com/apply/..."
            :required="true"
            v-model="job.applicationUrl"
          />
          <form-input
            label="Description"
            type="text"
            name="description"
            placeholder="Fintech startup looking for a Software Engineer..."
            :required="false"
            v-model="job.description"
          />
          <div class="flex flex-row justify-between my-2 space-x-4">
            <form-input
              label="Salary Min"
              type="number"
              name="salaryMin"
              placeholder="50000"
              :required="false"
              v-model.number="job.salaryMin"
              min="0"
              max="999999999"
            />
            <form-input
              label="Salary Max"
              type="number"
              name="salaryMax"
              placeholder="100000"
              :required="false"
              v-model.number="job.salaryMax"
              min="0"
              max="999999999"
            />
          </div>
          <form-input
            label="Tags (comma separated list)"
            type="text"
            name="tags"
            placeholder="Python, Javascript, AWS"
            :required="false"
            v-model="job.tags"
          />
        </div>
        <div class="flex flex-row items-center my-3 space-x-4">
          <button
            class="bg-gray-200 align-right px-4 py-2 rounded-sm text-primary"
            type="submit"
          >
            Post
          </button>
          <p
            class="text-lg"
            :class="{
              'text-red-500': errorMessage,
              'text-white': successMessage,
            }"
          >
            {{ successMessage || errorMessage }}
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import FormInput from "../components/FormInput.vue";

export default {
  components: { Navigation, FormInput },
  data: function() {
    return {
      job: {
        jobTitle: "",
        companyName: "",
        applicationUrl: "",
        description: "",
        salaryMin: 0,
        salaryMax: 0,
        tags: "",
      },
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    async createJob() {
      try {
        const job = await this.$axios.post(
          "/.netlify/functions/create-job",
          this.job
        );
        this.successMessage = "Job posted successfully.";
        this.errorMessage = "";
        this.resetForm();
      } catch (e) {
        this.successMessage = "";
        this.errorMessage = "Failed to post, try again later.";
      }
    },
    resetForm() {
      this.job.jobTitle = "";
      this.companyName = "";
      this.applicationUrl = "";
      this.description = "";
      this.salaryMin = 0;
      this.salaryMax = 0;
      this.tags = "";
    },
  },
};
</script>
