import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function AdminPage() {
    const router = useRouter();
  
    const  = () => {
      router.push("");
    }
    
  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={}>Create Product</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {=> (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button onClick={() =>}>
                  View
                </button>
                <button onClick={() =>}>
                  Edit
                </button>
                <button onClick={() =>}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

