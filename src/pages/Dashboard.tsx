// src/pages/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../mock/mockApi'; // relative path: pages -> ../mock

export default function Dashboard() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts().then((data: any) => setItems(Array.isArray(data) ? data : []));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard — Product Snapshot</h2>
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>
            <strong>{item.sku}</strong> — {item.name} — Qty: {item.qty_on_hand} — Reorder: {item.reorder_point}
          </li>
        ))}
      </ul>
    </div>
  );
}
