import axios from 'axios';

// Define the type for the user data
interface UserData {
  email: string;
  password: string;
}

// Define the type for the response from the API
interface CreateUserResponse {
  id: number; // Adjust based on your API response
  email: string;
}

// Create the API function to create a user
export const createUser  = async (userData: UserData): Promise<CreateUserResponse> => {
  const response = await axios.post<CreateUserResponse>('http://localhost:8080/api/users', userData);
  return response.data;
};