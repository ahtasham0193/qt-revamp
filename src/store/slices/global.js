const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")
import Api_Service from "../../api-handling/api-service"


const api = new Api_Service();

const initialState = {
    blogsData: {},
    trendingBlog: {},
    blogDetail: {},
    relatedBlogs: [],
    loading: false,
    contactAlert: false,
    portflioAlert: false,
}


export const fetchBlogsData = createAsyncThunk('fetchBlogsData',
    async (offset) => {
        return await api.get(`blog?offset=${offset}`).then(res => {
           if(!res.hasErrors()) {
                return res.data
            }
         
            else {
                throw res.errors[0].err?.text
            }
        })
    }
);

export const fetchTrendBlogData = createAsyncThunk('fetchTrendBlogData',
    async () => {
        return await api.get(`blog/trending`).then(res => {
            if(!res.hasErrors()) {
                return res.data
            }
            else {
                throw res.errors[0].err?.text
            }
        })
    }
);

export const fetchBlogDetail = createAsyncThunk('fetchBlogDetail',
    async (slug) => {
        return await api.get(`blog/${slug}`).then(res => {
            if(!res.hasErrors()) {
                return res.data
            }
            else {
                throw res.errors[0].err?.text
            }
        })
    }
);

export const postContactusForm = createAsyncThunk('postContactusForm',
    async (data) => {
        return await api.post(`contact-us`,data).then(res => {
            if(!res.hasErrors()) {
                return res.data
            }
            else {
                throw res.errors[0].err?.text
            }
        })
    }
);

export const postPortfolioForm = createAsyncThunk('postPortfolioForm',
    async (data) => {
        return await api.post(`contact-us/portfolio`,data).then(res => {
            if(!res.hasErrors()) {
                return res.data
            }
            else {
                throw res.errors[0].err?.text
            }
        })
    }
);

export const fetchRelatedBlogData = createAsyncThunk('fetchRelatedBlogData',
    async (slug) => {
        return await api.get(`blog/related/${slug}`).then(res => {
            if(!res.hasErrors()) {
                return res.data
            }
            else {
                throw res.errors[0].err?.text
            }
        })
    }
);

const global_items = createSlice({
    name : 'globalItem',
    initialState,
    reducers:
    {
        hideContactAlert : (state, action) => {
            state.contactAlert = false;
        },
        hidePortfolioAlert : (state, action) => {
            state.portflioAlert = false;
        }
    },
    extraReducers: (builder) =>
    {
        builder.addCase(fetchBlogsData.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchBlogsData.fulfilled, (state, action) => {
            state.blogsData = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchTrendBlogData.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchTrendBlogData.fulfilled, (state, action) => {
            state.trendingBlog = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchBlogDetail.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchBlogDetail.fulfilled, (state, action) => {
            state.blogDetail = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchRelatedBlogData.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchRelatedBlogData.fulfilled, (state, action) => {
            state.relatedBlogs = action.payload;
            state.loading = false;
        })
        builder.addCase(postContactusForm.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(postContactusForm.fulfilled, (state, action) => {
            state.contactAlert = true;
            state.loading = false;
        })
        builder.addCase(postPortfolioForm.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(postPortfolioForm.fulfilled, (state, action) => {
            state.portflioAlert = true;
            state.loading = false;
        })
    }
})


export const { hideContactAlert , hidePortfolioAlert} = global_items.actions;
export default global_items;