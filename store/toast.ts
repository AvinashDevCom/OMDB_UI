import { defineStore } from "pinia";

export const toastStore = defineStore("toastStore", () => {
  const toastType = ref<string>("success");
  const toastMessage = ref<string>("");

  function setError(value: string) {
    toastType.value = "error";
    toastMessage.value = value;
  }

  function setSuccess(value: string) {
    toastType.value = "success";
    toastMessage.value = value;
  }
  return { toastType, toastMessage, setError, setSuccess };
});
