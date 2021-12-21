/*==============================================================*/
/* DBMS name:      PostgreSQL 9.x                               */
/* Created on:     12/11/2021 3:17:35 PM                        */
/*==============================================================*/


DROP TABLE IF EXISTS ACCOUNT;

DROP TABLE IF EXISTS PATIENT_PACKAGE_CHANGE;

DROP TABLE IF EXISTS DETAILED_PACKAGE;

DROP TABLE IF EXISTS EXPOSED_RELATIVE_PATIENT;

DROP TABLE IF EXISTS IMAGE_URL;

DROP TABLE IF EXISTS PATIENT_PACKAGE_USAGE;

DROP TABLE IF EXISTS PACKAGE_OF_NECESSITIES;

DROP TABLE IF EXISTS RECORD_HOSPITAL_HISTORY;

DROP TABLE IF EXISTS RECORD_STATUS_HISTORY;

DROP TABLE IF EXISTS NECESSITIES;

DROP TABLE IF EXISTS MG_USER;

DROP TABLE IF EXISTS PATIENT;

DROP TABLE IF EXISTS FIELD_HOSPITAL;


/*==============================================================*/
/* Table: ACCOUNT                                               */
/*==============================================================*/
CREATE TABLE ACCOUNT (
   ID_ACCOUNT           SERIAL,
   ID_USER              INT4                 NOT NULL,
   CARD_NUMBER          NUMERIC              NULL,
   BALANCE              NUMERIC              NULL,
   CREATED_AT           DATE                 NULL,
   UPDATED_AT           DATE                 NULL,
   CONSTRAINT PK_ACCOUNT PRIMARY KEY (ID_ACCOUNT)
);

/*==============================================================*/
/* Table: DETAILED_PACKAGE                                      */
/*==============================================================*/
CREATE TABLE DETAILED_PACKAGE (
   ID_PACKAGE           INT4                 NOT NULL,
   ID_NECESSITIES       INT4                 NOT NULL,
   QUATITY              NUMERIC              NULL,
   MAX_QUALITY          NUMERIC              NULL,
   CREATED_AT           DATE                 NULL,
   UPDATED_AT           DATE                 NULL,
   CONSTRAINT PK_DETAILED_PACKAGE PRIMARY KEY (ID_PACKAGE, ID_NECESSITIES)
);

/*==============================================================*/
/* Table: EXPOSED_RELATIVE_PATIENT                              */
/*==============================================================*/
CREATE TABLE EXPOSED_RELATIVE_PATIENT (
   ID_PATIENT           INT4                 NOT NULL,
   RELATIVE_PATIENT_ID  INT4                 NOT NULL,
   CREATED_AT           DATE                 NULL,
   UPDATED_AT           DATE                 NULL,
   CONSTRAINT PK_EXPOSED_RELATIVE_PATIENT PRIMARY KEY (ID_PATIENT, RELATIVE_PATIENT_ID)
);

/*==============================================================*/
/* Table: FIELD_HOSPITAL                                        */
/*==============================================================*/
CREATE TABLE FIELD_HOSPITAL (
   ID_FIELD_HOSPITAL    SERIAL                 NOT NULL,
   NAME                 VARCHAR(255)          NULL,
   CAPACITY             NUMERIC              NULL,
   AVAILABLE            NUMERIC              NULL,
   CREATED_AT           DATE                 NULL,
   UPDATED_AT           DATE                 NULL,
   CONSTRAINT PK_FIELD_HOSPITAL PRIMARY KEY (ID_FIELD_HOSPITAL)
);

/*==============================================================*/
/* Table: IMAGE_URL                                             */
/*==============================================================*/
CREATE TABLE IMAGE_URL (
   ID_IMAGE_URL         SERIAL                 NOT NULL,
   ID_NECESSITIES       INT4                 NOT NULL,
   URL                  TEXT                 NULL,
   CREATED_AT           DATE                 NULL,
   UPDATED_AT           DATE                 NULL,
   CONSTRAINT PK_IMAGE_URL PRIMARY KEY (ID_IMAGE_URL)
);

/*==============================================================*/
/* Table: PATIENT                                               */
/*==============================================================*/
CREATE TABLE PATIENT (
   ID_PATIENT           SERIAL                 NOT NULL,
   ID_FIELD_HOSPITAL    INT4                 NOT NULL,
   FIRST_NAME           VARCHAR(20)          NULL,
   STATUS               INT4                 NULL,
   LAST_NAME            VARCHAR(20)          NULL,
   IDENTITY_NUMBER      VARCHAR(12)          NULL,
   PROVINCE             VARCHAR(20)          NULL,
   DISTRICT             VARCHAR(20)          NULL,
   WARD                 VARCHAR(20)          NULL,
   CREATED_AT           DATE                 NULL,
   UPDATED_AT           DATE                 NULL,
   CONSTRAINT PK_PATIENT PRIMARY KEY (ID_PATIENT)
);

/*==============================================================*/
/* Table: NECESSITIES                                           */
/*==============================================================*/
CREATE TABLE NECESSITIES (
   ID_NECESSITIES       SERIAL                 NOT NULL,
   NAME                 VARCHAR(20)          NULL,
   PRICE                NUMERIC              NULL,
   UNIT                 VARCHAR(20)          NULL,
   CREATED_AT           DATE                 NULL,
   UPDATED_AT           DATE                 NULL,
   CONSTRAINT PK_NECESSITIES PRIMARY KEY (ID_NECESSITIES)
);

/*==============================================================*/
/* Table: PACKAGE_OF_NECESSITIES                                */
/*==============================================================*/
CREATE TABLE PACKAGE_OF_NECESSITIES (
   ID_PACKAGE           SERIAL                 NOT NULL,
   NAME                 VARCHAR(20)          NULL,
   MAX_FACILITIES_NUMBER VARCHAR(255)         NULL,
   PRICE                NUMERIC              NULL,
   EXPIRE_TIME          DATE                 NULL,
   MAX_PACKAGE_PER_PATIENT NUMERIC              NULL,
   CREATED_AT           DATE                 NULL,
   UPDATED_AT           DATE                 NULL,
   CONSTRAINT PK_PACKAGE_OF_NECESSITIES PRIMARY KEY (ID_PACKAGE)
);


/*==============================================================*/
/* Table: PATIENT_PACKAGE_USAGE                                 */
/*==============================================================*/
CREATE TABLE PATIENT_PACKAGE_USAGE (
	ID_PACKAGE_USAGE	SERIAL,
   ID_PACKAGE           INT4                 NOT NULL,
   ID_PATIENT           INT4                 NOT NULL,
   PAYMENT_STATUS       BOOL                 NULL,
   CREATED_AT           DATE                 NULL,
   UPDATED_AT           DATE                 NULL,
   CONSTRAINT PK_PATIENT_PACKAGE_USAGE PRIMARY KEY (ID_PACKAGE_USAGE)
);

/*==============================================================*/
/* Table: RECORD_HOSPITAL_HISTORY                               */
/*==============================================================*/
CREATE TABLE RECORD_HOSPITAL_HISTORY (
   ID_FIELD_HOSPITAL    INT4                 NOT NULL,
   ID_PATIENT           INT4                 NOT NULL,
   ID_HOSPITAL_HIS      SERIAL                NOT NULL,
   CREATED_AT           DATE                 NULL,
   UPDATED_AT           DATE                 NULL,
   CONSTRAINT PK_RECORD_HOSPITAL_HISTORY PRIMARY KEY (ID_HOSPITAL_HIS)
);

/*==============================================================*/
/* Table: RECORD_STATUS_HISTORY                                 */
/*==============================================================*/
CREATE TABLE RECORD_STATUS_HISTORY (
   ID_STATUS_HIS      SERIAL                 NOT NULL,
   ID_PATIENT           INT4                 NOT NULL,
   EXPOSED_STATUS  	INT4                 NULL,
   CREATED_AT           DATE                 NULL,
   UPDATED_AT           DATE                 NULL,
   CONSTRAINT PK_RECORD_STATUS_HISTORY PRIMARY KEY (ID_STATUS_HIS)
);

/*==============================================================*/
/* Table: MG_USER                                               */
/*==============================================================*/
CREATE TABLE MG_USER (
   ID_USER              SERIAL                 NOT NULL,
   ID_PATIENT           INT4                 NULL,
   EMAIL                VARCHAR(255)         NULL,
   PASSWORD             VARCHAR(255)         NULL,
   AVATAR               VARCHAR(255)         NULL,
   ATTEMPT              NUMERIC              NULL,
   ROLE                 INT4                 NULL,
   STATUS               INT4                 NULL,
   CREATED_AT           DATE                 NULL,
   UPDATED_AT           DATE                 NULL,
   CONSTRAINT PK_MG_USER PRIMARY KEY (ID_USER)
);

/*==============================================================*/
/* Table: PATIENT_PACKAGE_CHANGE                                        */
/*==============================================================*/
CREATE TABLE PATIENT_PACKAGE_CHANGE (
   ID_PACKAGE_CHANGE   SERIAL                 NOT NULL,
   ID_PATIENT           INT4                NOT NULL,
   ID_PACKAGE           INT4                 NOT NULL,
	ID_NECESSITIES      INT4                 NOT NULL,
   CHANGED_QUATITY		NUMERIC				NULL,
   CREATED_AT           DATE                 NULL,
   UPDATED_AT           DATE                 NULL,
   CONSTRAINT PK_PATIENT_PACKAGE_CHANGE PRIMARY KEY (ID_PACKAGE_CHANGE)
);

ALTER TABLE PATIENT_PACKAGE_CHANGE
   ADD CONSTRAINT FK_PATIENT_P_PACKAGE_CHANGE FOREIGN KEY (ID_PATIENT)
      REFERENCES PATIENT (ID_PATIENT)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE PATIENT_PACKAGE_CHANGE
   ADD CONSTRAINT FK_PATIENT_PACKAGE_P_CHANGE FOREIGN KEY (ID_PACKAGE)
      REFERENCES PACKAGE_OF_NECESSITIES (ID_PACKAGE)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE PATIENT_PACKAGE_CHANGE
   ADD CONSTRAINT FK_PATIENT_PACKAGE_CHANGE_NECESSITIES FOREIGN KEY (ID_NECESSITIES)
      REFERENCES NECESSITIES (ID_NECESSITIES)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE ACCOUNT
   ADD CONSTRAINT FK_ACCOUNT_RELATIONS_USER FOREIGN KEY (ID_USER)
      REFERENCES MG_USER (ID_USER)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE DETAILED_PACKAGE
   ADD CONSTRAINT FK_DETAILED_DETAILED__PACKAGE_ FOREIGN KEY (ID_PACKAGE)
      REFERENCES PACKAGE_OF_NECESSITIES (ID_PACKAGE)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE DETAILED_PACKAGE
   ADD CONSTRAINT FK_DETAILED_DETAILED__NECESSIT FOREIGN KEY (ID_NECESSITIES)
      REFERENCES NECESSITIES (ID_NECESSITIES)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE EXPOSED_RELATIVE_PATIENT
   ADD CONSTRAINT FK_EXPOSED__EXPOSED_R_PATIENT FOREIGN KEY (RELATIVE_PATIENT_ID)
      REFERENCES PATIENT (ID_PATIENT)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE EXPOSED_RELATIVE_PATIENT
   ADD CONSTRAINT FK_EXPOSED__EXPOSED_R_PATIENT_2 FOREIGN KEY (ID_PATIENT)
      REFERENCES PATIENT (ID_PATIENT)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE IMAGE_URL
   ADD CONSTRAINT FK_IMAGE_UR_RELATIONS_NECESSIT FOREIGN KEY (ID_NECESSITIES)
      REFERENCES NECESSITIES (ID_NECESSITIES)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE PATIENT
   ADD CONSTRAINT FK_PATIENT_RELATIONS_FIELD_HO FOREIGN KEY (ID_FIELD_HOSPITAL)
      REFERENCES FIELD_HOSPITAL (ID_FIELD_HOSPITAL)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE PATIENT_PACKAGE_USAGE
   ADD CONSTRAINT FK_PATIENT__PATIENT_P_PACKAGE_ FOREIGN KEY (ID_PACKAGE)
      REFERENCES PACKAGE_OF_NECESSITIES (ID_PACKAGE)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE PATIENT_PACKAGE_USAGE
   ADD CONSTRAINT FK_PATIENT__PATIENT_P_PATIENT FOREIGN KEY (ID_PATIENT)
      REFERENCES PATIENT (ID_PATIENT)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE RECORD_HOSPITAL_HISTORY
   ADD CONSTRAINT FK_RECORD_H_RECORD_HO_FIELD_HO FOREIGN KEY (ID_FIELD_HOSPITAL)
      REFERENCES FIELD_HOSPITAL (ID_FIELD_HOSPITAL)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE RECORD_HOSPITAL_HISTORY
   ADD CONSTRAINT FK_RECORD_H_RECORD_HO_PATIENT FOREIGN KEY (ID_PATIENT)
      REFERENCES PATIENT (ID_PATIENT)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE RECORD_STATUS_HISTORY
   ADD CONSTRAINT FK_RECORD_S_RELATIONS_PATIENT FOREIGN KEY (ID_PATIENT)
      REFERENCES PATIENT (ID_PATIENT)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE MG_USER
   ADD CONSTRAINT FK_USER_RELATIONS_PATIENT FOREIGN KEY (ID_PATIENT)
      REFERENCES PATIENT (ID_PATIENT)
      ON DELETE RESTRICT ON UPDATE RESTRICT;

