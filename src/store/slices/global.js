const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")
import Api_Service from "../../api-handling/api-service"


const api = new Api_Service();

const initialState = {
    blogsData: [],
    trendingBlog: {},
    blogDetail: {},
    relatedBlogs: []
}


export const fetchBlogsData = createAsyncThunk('fetchBlogsData',
    async () => {
        return await api.get(`blog?offset=1`).then(res => {
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

    },
    extraReducers: (builder) =>
    {
        builder.addCase(fetchBlogsData.fulfilled, (state, action) => {
            state.blogsData = action.payload;
        })
        builder.addCase(fetchTrendBlogData.fulfilled, (state, action) => {
            state.trendingBlog = action.payload;
        })
        builder.addCase(fetchBlogDetail.fulfilled, (state, action) => {
            state.blogDetail = action.payload;
        })
        builder.addCase(fetchRelatedBlogData.fulfilled, (state, action) => {
            state.relatedBlogs = action.payload;
        })
    }
})


export const {} = global_items.actions;
export default global_items;