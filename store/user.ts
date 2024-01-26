import supabase from "~/lib/supabase";
export const useUserStore = defineStore("users", () => {
  const initialState = {
    email: "",
    password: "",
  };

  const router = useRouter();
  const userEmail = ref();
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
      userEmail.value = response?.data.user?.email;
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
      accessToken.value = response.data.session?.access_token;
      isLoading.value = false;
      if (accessToken.value) {
        isLoggedIn.value = true;
      } else {
        throw new Error("Acesso negado, access token não encontrado");
      }
      await getUserMetadata();

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
    userEmail,
    isLoading,
    accessToken,
  };
});
