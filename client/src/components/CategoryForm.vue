<template>
    <form>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Title</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Slug</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <button class="btn btn-primary">Lưu</button>
            <button
                v-if="contactLocal._id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="deleteCategory">
                Xóa
            </button>
    </form>
</template>

<script>
export default {
    components: {

    },
    emits: ['submit:category', 'delete:category'],
    props: {
        category: {
            type: Object, required: true
        }
    }
}
</script>