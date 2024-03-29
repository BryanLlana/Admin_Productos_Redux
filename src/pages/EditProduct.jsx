const EditProduct = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Editar Producto
              </h2>

              <form>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" className="form-control" id="name" name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Precio</label>
                  <input type="text" className="form-control" id="price" name="price" />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                >Guardar Cambios
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProduct