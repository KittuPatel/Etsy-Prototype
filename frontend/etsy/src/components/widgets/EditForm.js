import React from "react"

const EditForm = ({ handleAddItemUpload, categories }) => {
  const handleEditItemInputChange = (e) => {}
  return (
    <div>
      <form>
        {/* {submitError && (
          <div class='alert alert-danger' role='alert'>
            {submitError}
          </div>
        )} */}
        <div class='form-group'>
          <label for='name' class='col-form-label'>
            Product Name
          </label>
          <input
            type='text'
            class='form-control'
            id='name'
            name='name'
            onChange={handleEditItemInputChange}
          />
        </div>
        <div class='form-group'>
          <label for='category'>Category</label>
          <select
            id='category'
            class='form-control'
            name='categoryId'
            onChange={handleEditItemInputChange}
          >
            <option disabled selected>
              Choose Category
            </option>
            {categories &&
              categories.map((category) => {
                return <option value={category._id}>{category.name}</option>
              })}
          </select>
        </div>
        <div class='form-group'>
          <label class='col-form-label' for='price'>
            Price (USD)
          </label>
          <input
            type='number'
            class='form-control'
            id='price'
            name='price'
            onChange={handleEditItemInputChange}
          />
        </div>
        <div class='form-group'>
          <label for='message-text' class='col-form-label'>
            Description
          </label>
          <textarea
            class='form-control'
            name='description'
            onChange={handleEditItemInputChange}
          ></textarea>
        </div>
        <div class='form-group'>
          <label for='recipient-name' class='col-form-label'>
            Quantity Available
          </label>
          <input
            type='number'
            name='quantity'
            onChange={handleEditItemInputChange}
            class='form-control'
          />
        </div>
        <div className='form-group'>
          <label class='form-label' for='customFile'>
            Upload Product Image
          </label>
          <input
            type='file'
            class='form-control'
            accept='image/*'
            id='customFile'
            name='imageUrl'
            onChange={handleAddItemUpload}
          />
        </div>
      </form>
    </div>
  )
}

export default EditForm
