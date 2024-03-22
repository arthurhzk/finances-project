import supabase from "@/lib/supabase";

export const useUserStore = defineStore("users", () => {
  const initialState = {
    email: "",
    password: "",
  };

  const router = useRouter();
  const user = ref();
  const isLoggedIn = ref<boolean>(false);
  const accessToken = ref();
  const state = ref(initialState);
  const isLoading = ref(false);

  const signUpUser = async () => {
    isLoggedIn.value = true;
    try {
      isLoggedIn.value = false;
      await supabase.auth.signUp({
        email: state.value.email,
        password: state.value.password,
      });
    } catch (error) {
      isLoggedIn.value = false;
      throw new Error("Erro ao cadastrar usuário");
    }
  };

  const getUserMetadata = async () => {
    try {
      isLoggedIn.value = true;
      const response = await supabase.auth.getUser();
      user.value = response?.data.user?.user_metadata;
    } catch (error) {
      throw new Error("Erro ao buscar usuário");
    }
  };

  const signInUser = async () => {
    isLoading.value = true;
    try {
      const response = await supabase.auth.signInWithPassword({
        email: state.value.email,
        password: state.value.password,
      });
      if (response.error) {
        throw new Error("Erro ao logar usuário");
      }
      accessToken.value = response.data.session.access_token;
      isLoggedIn.value = true;
      isLoading.value = false;
      router.push("/home");
    } catch (error) {
      isLoading.value = false;
      throw new Error("Erro ao logar usuário");
    }
  };

  const signOutUser = async () => {
    await supabase.auth.signOut();
    isLoggedIn.value = false;
    router.push("/");
  };

  return {
    state,
    isLoggedIn,
    signUpUser,
    signInUser,
    signOutUser,
    getUserMetadata,
    user,
    isLoading,
    accessToken,
  };
});
