import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  TextField,
  MenuItem
} from '@mui/material';

function Dashboard() {
  const [assets, setAssets] = useState([]);
  const [filter, setFilter] = useState({
    date: '',
    base: '',
    type: ''
  });

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const res = await API.get('/assets', { params: filter });
        setAssets(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAssets();
  }, [filter]);

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <h2>Military Assets Dashboard</h2>
      
      {/* Filters */}
      <div style={{ marginBottom: 20 }}>
        <TextField
          select
          label="Base"
          name="base"
          value={filter.base}
          onChange={handleFilterChange}
          style={{ marginRight: 10, width: 150 }}
        >
          <MenuItem value="">All Bases</MenuItem>
          <MenuItem value="base1">Base 1</MenuItem>
          <MenuItem value="base2">Base 2</MenuItem>
        </TextField>
        
        <TextField
          select
          label="Type"
          name="type"
          value={filter.type}
          onChange={handleFilterChange}
          style={{ marginRight: 10, width: 150 }}
        >
          <MenuItem value="">All Types</MenuItem>
          <MenuItem value="weapon">Weapons</MenuItem>
          <MenuItem value="vehicle">Vehicles</MenuItem>
        </TextField>
      </div>

      {/* Assets Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Base</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map(asset => (
              <TableRow key={asset._id}>
                <TableCell>{asset.name}</TableCell>
                <TableCell>{asset.type}</TableCell>
                <TableCell>{asset.quantity}</TableCell>
                <TableCell>{asset.status}</TableCell>
                <TableCell>{asset.base?.name || 'N/A'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Dashboard;
