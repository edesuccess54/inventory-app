import { useRef, useState } from "react";

type UseFileSelectionProps = {
  setValue?: any;
  setError?: any;
  clearErrors: any;
};

type UseFileSelectionReturn = {
  removeFile: () => void;
  avatarUrl: string;
  file: File | null;
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleDrop: (e: React.DragEvent<HTMLLabelElement>) => void;
  handleFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const useFileSelection = ({
  clearErrors,
  setValue,
  setError,
}: UseFileSelectionProps): UseFileSelectionReturn => {
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelection = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("productImage", {
        type: "manual",
        message: "Incorrect file type. Please select an image file.",
      });
      return;
    }

    if (file.size > 1048576) {
      setError("productImage", "File size is greater than the max allowed size of 1MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setAvatarUrl(result);
      setFile(file);
      setValue && setValue("productImage", file);
    };
    reader.onerror = () => {
      setError("productImage", "Failed to read file.");
    };
    reader.readAsDataURL(file);

    clearErrors("productImage");
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelection(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelection(e.dataTransfer.files[0]);
    }
  };

  const removeFile = () => {
    setAvatarUrl("");
    setFile(null);
    setValue && setValue("productImage", null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return {
    inputRef, 
    avatarUrl,
    file,
    removeFile,
    handleDrop,
    handleFileInputChange,
  };
};

export default useFileSelection;
