import useLocalStorage from "./localStorageKullan";

const useModeChange = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);

  const changeModeHandler = (updatedMode) => {
    setValue(updatedMode);
  };

  return [value, changeModeHandler];
};
export default useModeChange;
