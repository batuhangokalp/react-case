import Login from "./Login";
import Register from "./Register";
const Auth = () => {
  return (
    <section className="mx-20">
      <div className=" w-full mx-auto">
        <div className="flex justify-around">
          <Login />
          <Register />
        </div>
      </div>
    </section>
  );
};
export default Auth;
