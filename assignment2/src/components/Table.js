import React, { useState, useEffect } from "react";

function Table() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  console.log(userData, "DAtaaaaaaaaaaaaaaaaa");
  return (
    <>
        {userData.map((user) => (
            <>
                <p>{user.name}</p>
                <p>{user?.address?.city}</p>
            </>
        
        
        ))}
    </>
  );
}

export default Table;
