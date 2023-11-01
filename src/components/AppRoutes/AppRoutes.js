
import { Route, Routes} from 'react-router-dom'
import SideMenu from '../SideMenu/dashboard';
import EmployeeForm from '../../pages/EmployeeForm/EmployeeForm';
import EmployeeList from '../../pages/EmployeeList/EmployeeList';
import HomePage from '../../pages/HomePage/Homepage';
import Payroll from '../../pages/PayrollTable/SalaryList';


function AppRoutes(){
    return(
        
        <Routes>
            
            <Route path='/dashboard' element={<SideMenu />}></Route>
            <Route path='/home' element={<HomePage />}></Route>
            <Route path='/employeeform' element={<EmployeeForm />}></Route>
            <Route path='/employeelist' element={<EmployeeList />}></Route>
            <Route path='/staffsalary' element={<Payroll />}></Route>
              

        </Routes>        
       
    );

}
export default AppRoutes;