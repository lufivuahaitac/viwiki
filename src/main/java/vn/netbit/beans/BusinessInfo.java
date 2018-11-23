/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package vn.netbit.beans;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 *
 * @author truongnq
 */
@Getter
@Setter
@ToString
@Builder
public class BusinessInfo {
    private String url;
    private String countryCode;
    private String businessName;
    private String businessAddress;
    private String businessProvince;
    private String businessDistrict;
    private String businessWards;
    private String about;
    private String images;
    private String businessPhone;
    private String businessEmail;
    private String businessWebsite;
}