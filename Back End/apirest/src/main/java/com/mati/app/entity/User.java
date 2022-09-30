package com.mati.app.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User implements Serializable{
	

	private static final long serialVersionUID = 1221369062391880071L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(length = 30)
	private String name;
	
	@Column(length = 30)
	private String last_name_p;
	
	@Column(length = 30)
	private String last_name_m;
	
	/*
	 * 
	@Column(name="mail", nullable=false,length = 50, unique =true)
	private String email;	
	
	*/
	
	@Column(length = 250)
	private String domicilio;
	
	@Column(length = 25)
	private String tel;
	
	@Column
	private int sanctions;
	
	@Column 
	private int sanc_money;
	
	//private Boolean enabled;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

/*
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}
	
*/
	public String getLast_name_p() {
		return last_name_p;
	}

	public void setLast_name_p(String last_name_p) {
		this.last_name_p = last_name_p;
	}

	public String getLast_name_m() {
		return last_name_m;
	}

	public void setLast_name_m(String last_name_m) {
		this.last_name_m = last_name_m;
	}

	public String getDomicilio() {
		return domicilio;
	}

	public void setDomicilio(String domicilio) {
		this.domicilio = domicilio;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public int getSanctions() {
		return sanctions;
	}

	public void setSanctions(int sanctions) {
		this.sanctions = sanctions;
	}

	public int getSanc_money() {
		return sanc_money;
	}

	public void setSanc_money(int sanc_money) {
		this.sanc_money = sanc_money;
	}

	
}
