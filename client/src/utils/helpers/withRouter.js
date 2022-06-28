// import { useLocation, useNavigate, useParams } from "react-router-dom";

// export default function withRouter(Component) {
//   console.log(Component);
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return <Component {...props} router={{ location, navigate, params }} />;
//   }

//   return ComponentWithRouterProp;
// }

// //uses withRouter with a Component this way like

// testComponent is the Component like Home , Header this type of component which i will wrapping by withRouter and this way i will use withRouter with a component..
// const testComponent=({router})=>{
//     console.log(router.navigator);
//     return(
//         <div></div>
//     )
// }
// export default withRouter(testComponent)
