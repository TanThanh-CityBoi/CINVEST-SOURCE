export const microservicesVariableEnvironments = () => ({
  microservices: {
    grpc_url: process.env.GRPC_URL,
    grpc_profile_url: process.env.PROFILE_SERVICE,
  },
});
