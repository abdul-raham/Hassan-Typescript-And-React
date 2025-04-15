function Head(Proos){
    return(
        <>
            <div className="container-fluid bg-danger p-3">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <h1 className="text-white ">{Proos.course}</h1>
                        <p>{Proos.note}</p>
                    </div>
                    <div className="col">
                        <img src={Proos.img} alt="image" className="img-fluid border rounded" width={"300px"} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Head