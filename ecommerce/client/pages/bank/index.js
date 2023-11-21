import BankContext from "@/contexts/bank-context";
import { getSession } from "next-auth/client";
import { useContext, useEffect, useState } from "react";
import swal from "sweetalert2";
import Image from "next/image";
import logo from './bankimage.png'
export default function BankConnect() {
  const [sessionEmail, setSessionEmail] = useState("");
  var stat = true;
  useEffect(() => {
    getSession().then((session) => {
      console.log(session);
      setSessionEmail(session.user.email);
    });
  }, []);
  var userData ;
  const bankCtx = useContext(BankContext);
  console.log(bankCtx);
  useEffect(() => {
    //get
  });

  var varify;
  var xyzpass;
  function getBank() {
    fetch("http://localhost:4000/get-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: sessionEmail,
      }),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((ans) => {
        console.log(ans);
        /////////////////////////////////////////////////
        //bankCtx.setConnectedToBank(true);
        
        // setBankUser({
        //   email: ans.user.email,
        //   name: ans.user.name,
        //   money: ans.user.money,
        // });
        xyzpass = ans.user.password;
        varify = ans.secret;
        
        bankCtx.setBankDetails({
          name: ans.user.name,
          email: ans.user.email,
          amount: ans.user.money,
          //password: ans.user.password
        });
        
      })
      .catch((e) => {
        stat = false;
        console.log(e);
      });
  


    
  



    swal.fire({
      title: 'Enter your password to connect to the bank',
      input: 'password',
      showCancelButton: true,
      confirmButtonText: 'Connect',
      preConfirm: async (password) => {
        try {
          //const userData = ans.json();
  
          const fetchedPassword = xyzpass;
          
          console.log("Fetched password : ",fetchedPassword);
          
          
          if (!stat) {
            throw new Error("Status failed");
          }
  
          
          if (password !== fetchedPassword) {
            throw new Error("Passwords do not match");
          }
  
          // Assuming the fetched user data has properties "name", "email", and "amount"
          
  
          return ;
  
        } catch (error) {
          swal.showValidationMessage(`Authentication failed: ${error.message}`);
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        bankCtx.setConnectedToBank(true);
        /*
        bankCtx.setBankDetails({
          name: result.value.name,
          email: result.value.email,
          amount: result.value.amount,
        });
        */

         
        // swal.fire({
        //   position: 'top-end',
        //   icon: 'success',
        //   title: 'Connected to bank successfully',
        //   showConfirmButton: false,
        //   timer: 1500
        // });
        

        swal.fire(
          
          'User Verification',
          `Verification code : ${varify}`,
          'success'
        );

       
      }
    });
  }
  
  return (
    <section>
      <br></br><br></br><br></br>
      <div>
      
        
      
      </div>
      <div className="bankDiv">
      <Image className="img" src={logo}/>
      
      </div>
      
      {bankCtx.connectedToBank ? (
        <div className="bg-orange-300 text-center w-1/3 p-8 m-auto mt-20 rounded-md shadow-md shadow-orange-400 text-orange-800 text-3xl">
          <div>name :{bankCtx.bankDetails.name}</div>
          <div>email :{bankCtx.bankDetails.email}</div>
          <div>amount :{bankCtx.bankDetails.amount}</div>
        </div>
      ) : (
        <div>
      <div><center>
        <button
          className="bg-blue-300 text-center w-1/3 p-8 m-auto mt-20 rounded-md shadow-md shadow-blue-400 text-blue-900 text-3xl"
          onClick={() => {
            getBank();
          }}
        >
          connect to bank
        </button></center>
      </div>
          <div><center>
      <button 
          className="bg-green-300 text-center w-1/3 p-8 m-auto mt-20 rounded-md shadow-md shadow-green-400 text-green-900 text-3xl"
        >
          Bank not connected!
        </button></center>
        </div>
        </div>
      )}
    </section>
  );
}
