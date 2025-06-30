import * as React from "react";
import Box from "@mui/system/Box";
import '../../src/App.css'
export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: "1px dashed grey",bgcolor:'orange' }}>
      
      <button type="button" className="bg-red-600 p-3.5 rounded-2xl w-16 text-sm " >red</button>

    </Box>
  );
}
