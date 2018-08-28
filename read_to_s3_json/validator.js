//Class validator.
class leanValidator{

  constructor(lean){
    this.lean = lean;
  }

  validate(){

    return this.newValidation()&&this.nullValidation()&&this.formatValidation();

  }

  //Check if the id field do'nt exist.
  newValidation(){

    return (this.lean.id==undefined);

  }

  //Validate all null.
  nullValidation(){

    return ((lean.firstName!=null)&&
            (lean.lastName!=null)&&
            (lean.email!=null)&&
            (lean.property.address.city!=null)&&
            (lean.property.address.state!=null)&&
            (lean.property.address.zip!=null)&&
            (lean.property.isNewConstruction!=null)&&
            (lean.property.prequalificationStatus!=null)&&
            (lean.property.prequalified!=null)&&
            (lean.product!=null)&&
            (lean.profileId!=null));
  }

  //Validate if the field are not undefined.
  formatValidation(){

    return ((this.lean.email)&&(this.lean.firstName)&&(this.lean.lastName)&&(this.lean.product)&&(this.lean.profileId));

  }

}

module.exports = leanValidator;