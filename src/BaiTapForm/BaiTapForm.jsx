import React, { Component } from "react";
import TableUser from "./TableUser";
import { connect } from "react-redux";

class BaiTapForm extends Component {
    state = {
        values: {
            mssv:"",
            name: "",
            sdt:"",
            email:"",
        },
        errors: {
            mssv:"",
            name: "",
            sdt:"",
            email:"",
        },
        isSubmit: true,
    };
    
    handleChange = (event) => {
        const {value,name} = event.target;
        const newValues = this.state.values;
        newValues[name] = value;
        

        const newError = {...this.state.errors};
        if (newValues[name] === ""){
            newError[name] = 'Vui Lòng Không Để Trống'
        } else {
          newError.name = '';
        }

        if (newValues[name] !== ''){
        if (name === "sdt" && !this.checkDinhDangSdt(newValues[name])){
          newError.sdt = 'Sai Định Dạng số điện thoại';
        } else {
          newError.sdt = '';
        }

        if (name == 'email' && !this.checkDinhDangEmail(newValues[name])) {
          newError.email = 'Sai định dạng email';
        }else {
          newError.email = '';
        }

        if (name == 'mssv' && !this.checkDinhDangId(newValues[name])) {
          newError.mssv = 'mssv từ 4 đến 6 chữ số';
        }else {
          newError.mssv = '';
        }

      }

      let arrow = false;
      let isActive = true;
      for (let key in newValues){
        if(newValues[key] == ''){
          arrow = true;
        }
      }
      isActive = isActive && arrow;

        this.setState({
            values: newValues,
            errors: newError,
            isSubmit: isActive,
        })
    };
    handleSubmit = (event) => {
      //ngăn chặn reload trang
      event.preventDefault();
      this.props.setArrHocVien(this.state.values);
  };
    checkDinhDangSdt = (phone) => {
        const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        return regexPhoneNumber.test(phone) ? true : false;
    };

    checkDinhDangEmail = (email) => {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regexEmail.test(email) ? true : false;
    }

    checkDinhDangId = (mssv) => {
      const regexId = /^\d{4,6}$/;
      return regexId.test(mssv) ? true : false;
    }

    
  render() {
    return (
        <div className="container pt-2">
          <form onSubmit={this.handleSubmit}>
          <div className="p-2" style={{backgroundColor:"black"}}>
          <h2 style={{color:"white"}}>Thông Tin Sinh Viên</h2>
        </div>
            <div className="row pt-5">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor className="form-label">
                    Mã sv
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="mssv"
                    id
                    aria-describedby="helpId"
                    placeholder
                    onChange={this.handleChange}
                  />
                  <p className="mt-2 text-danger">{this.state.errors.mssv}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label className="form-label">
                    Họ Tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id
                    aria-describedby="helpId"
                    placeholder
                    onChange={this.handleChange}
                  />
                  <p className="mt-2 text-danger">{this.state.errors.name}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor className="form-label">
                    Số Điện Thoại
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="sdt"
                    id
                    aria-describedby="helpId"
                    placeholder
                    onChange={this.handleChange}
                  />
                  <p className="mt-2 text-danger">{this.state.errors.sdt}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id
                    aria-describedby="helpId"
                    placeholder
                    onChange={this.handleChange}
                  />
                  <p className="mt-2 text-danger">{this.state.errors.email}</p>
                </div>
              </div>
              <div className="text-center">
                <button disabled={this.state.isSubmit} type="submit" className="btn btn-success me-3" >Thêm Học viên</button>
              </div>
            </div>
          </form>
          <TableUser />
        </div>
        
      
    );
  }
}

const mapDispatchToProps = (dispath) => {
  return {
    setArrHocVien: (payload) => {
      const action = {
        type: 'SET_ARR_HOCVIEN',
        payload,
      }
      
      dispath(action)
    },
  }
}

export default connect(null, mapDispatchToProps)(BaiTapForm)
