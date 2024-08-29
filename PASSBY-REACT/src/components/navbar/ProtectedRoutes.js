const ProtectedRoutes=({children})=>{
    const authenticated = sessionStorage.getItem('authenticated');
    return authenticated == 'true' ? children: false;
}
export default ProtectedRoutes;