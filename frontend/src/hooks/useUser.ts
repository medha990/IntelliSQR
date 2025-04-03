import { useMutation } from '@tanstack/react-query';
import { createUser } from '../services/api';

// Define the type for the user data
interface UserData {
  email: string;
  password: string;
}

// Define the type for the response from the API
interface CreateUserResponse {
  id: number; // Assuming the response includes an ID
  email: string;
}

// Create the useUser hook
const useUser = () => {
  const mutation = useMutation<CreateUserResponse, Error, UserData>(
     // Wrap `createUser` inside a function
    {
      onSuccess: (data:any) => {
        console.log('User created successfully:', data);
      },
      onError: (error:any) => {
        console.error('Error creating user:', error);
      },
    }
  );

  return mutation;
};

export default useUser;
