package com.example.demo.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class certificateRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String givenName;
    @Column
    private String email;
    @Column
    private String country;
    @Column
    private String organization;
    @Column
    private Date startDate;
    @Column
    private Date endDate;
    @Column
    private boolean isCA;
    @Column
    private RequestStatus status;

}
