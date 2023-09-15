import React, { Component } from 'react'
import { connect } from 'react-redux'
class TableUser extends Component {
    render() {
        // console.log('props', this.props)
        const { arrHocVien } = this.props
        return (
            <div className='container mt-5'>
                <div className="table-responsive">
                    <table className="table table-striped
                    table-hover	
                    table-borderless
                    table-primary
                    align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Mã SV</th>
                                <th>Họ Tên</th>
                                <th>SĐT</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {arrHocVien.map((hocVien) => {
                                return (
                                    <tr className="table-primary" key={hocVien.id}>
                                        <td>{hocVien.mssv}</td>
                                        <td>{hocVien.name}</td>
                                        <td>{hocVien.sdt}</td>
                                        <td>{hocVien.email}</td>
                                        <td>
                                            <button className='btn btn-danger me-3'>Xóa</button>
                                            <button className='btn btn-warning'>Sửa</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        arrHocVien: state.baiTapFormReducer.arrHocVien,
    }
}

export default connect(mapStateToProps)(TableUser)
