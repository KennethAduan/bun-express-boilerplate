// # Mock data and utility functions for testing

export const mockUserData = {
  email: "test@example.com",
  password: "password123",
  name: "Test User",
};

export const mockUserResponse = {
  id: "mock-uuid",
  email: mockUserData.email,
  name: mockUserData.name,
  createdAt: new Date(),
  updatedAt: new Date(),
};
