import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//post employees
export const createEmployee = createAsyncThunk("createEmployee" , async(handle , {rejectWithValue})=>{
    const response = await fetch('http://127.0.0.1:8000/',{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(handle)
    })
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        rejectWithValue(error.response);
    }
})

// show employees
export const showEmployee = createAsyncThunk("showEmployee", async(_,{rejectWithValue})=>{
 const response = await fetch('http://127.0.0.1:8000/')
 try {
    const result = await response.json();
    return result;
 } catch (error) {
    rejectWithValue(error.response);
 }
}
)

// delete employee
export const deleteEmployee = createAsyncThunk("deleteEmployee" , async(id, {rejectWithValue})=>{
    // console.log(id)
    const response = await fetch(`http://127.0.0.1:8000/${id}`,{
        method:'DELETE',
    })
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        rejectWithValue(error.response);
    }
})

//update employees
export const updateEmployee = createAsyncThunk("updateEmployee" , async(data , {rejectWithValue})=>{
    const response = await fetch(`http://127.0.0.1:8000/${data._id}`,{
        method:'PUT',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        rejectWithValue(error.response);
    }
})

 const employeeDetail = createSlice({
    name:"employeeDetail",
    initialState:{
        employees:[],
        loading:false,
        error:null,
    },
        //createAsyncThunk return a promise which contain three things pending,fulfilled,rejected to manage these three things we use extraReducers here 
        extraReducers:{
            [createEmployee.pending] : (state) =>{
                state.loading = true;
            },

            [createEmployee.fulfilled] : (state,action) =>{
                state.loading = false;
                state.employees = action.payload;
            },

            [createEmployee.rejected] : (state,action) =>{
                state.loading = false;
                state.error = action.error.message;
            },
            // for show employees
            [showEmployee.pending] : (state) =>{
                state.loading = true;
            },

            [showEmployee.fulfilled] : (state,action) =>{
                state.loading = false;
                state.employees = action.payload;
            },

            [showEmployee.rejected] : (state,action) =>{
                state.loading = false;
                state.error = action.error.message;
            },

            // to delete employee
            [deleteEmployee.pending] : (state) =>{
                state.loading = true;
            },

            [deleteEmployee.fulfilled] : (state,action) =>{
                state.loading = true;
                const {_id} = action.payload;
                if(_id){
                    state.employees = state.employees.filter((data)=> data.id !== _id);
                    console.log(state.employees )
                }
            },

            [deleteEmployee.rejected] : (state,action) =>{
                state.loading = false;
                state.error = action.error.message;
            },
            //for update data
            [updateEmployee.pending] : (state) =>{
                state.loading = true;
            },

            [updateEmployee.fulfilled] : (state,action) =>{
                state.loading = false;
                state.employees = action.payload;
            },

            [updateEmployee.rejected] : (state,action) =>{
                state.loading = false;
                state.error = action.error.message;
            },
        },
});

export default employeeDetail.reducer;