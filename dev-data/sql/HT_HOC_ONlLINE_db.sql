/*==============================================================*/
/* DBMS name:      PostgreSQL 8                                 */
/* Created on:     12/27/2021 9:34:52 PM                        */
/*==============================================================*/

DROP INDEX IF EXISTS DISABLE_FK;

DROP INDEX IF EXISTS DISABLE2_FK;

DROP TABLE IF EXISTS DISABLE;

DROP INDEX IF EXISTS ENABLE_FK;

DROP INDEX IF EXISTS ENABLE2_FK;

DROP TABLE IF EXISTS ENABLE;

DROP TABLE IF EXISTS SCHEDULE;

DROP INDEX IF EXISTS JOIN_FK;

DROP INDEX IF EXISTS JOIN2_FK;

DROP TABLE IF EXISTS "JOIN";

DROP INDEX IF EXISTS REVIEW_FK;

DROP INDEX IF EXISTS REVIEW2_FK;

DROP TABLE IF EXISTS REVIEW;

DROP INDEX IF EXISTS OWN_FK;

DROP TABLE IF EXISTS ACCOUNT;

DROP INDEX IF EXISTS HAVE_FK;

DROP TABLE IF EXISTS BANKACCOUNT;

DROP INDEX IF EXISTS CREATE_FK;

DROP TABLE IF EXISTS COURSE;

DROP TABLE IF EXISTS TEACHER;

DROP TABLE IF EXISTS "USER";

/*==============================================================*/
/* Table: ACCOUNT                                               */
/*==============================================================*/
create table ACCOUNT (
   USERNAME             VARCHAR(20)          null,
   PASSWORD             VARCHAR(255)          null,
   STATUS               NUMERIC              null,
   ROLE                 NUMERIC              null,
   ID                   SERIAL                 not null,
   USERID               INT4                 not null,
   constraint PK_ACCOUNT primary key (ID)
);

/*==============================================================*/
/* Index: OWN_FK                                                */
/*==============================================================*/
create  index OWN_FK on ACCOUNT (
USERID
);

/*==============================================================*/
/* Table: BANKACCOUNT                                           */
/*==============================================================*/
create table BANKACCOUNT (
   ACCOUNTID           	SERIAL                 not null,
   USERID               INT4                 not null,
   CARDNUMBER           VARCHAR(20)          null,
   BANK                 VARCHAR(20)          null,
   constraint PK_BANKACCOUNT primary key (ACCOUNTID)
);

/*==============================================================*/
/* Index: HAVE_FK                                               */
/*==============================================================*/
create  index HAVE_FK on BANKACCOUNT (
USERID
);

/*==============================================================*/
/* Table: COURSE                                                */
/*==============================================================*/
create table COURSE (
   COURSEID             SERIAL                 not null,
   USERID               INT4                 not null,
   COURSENAME           VARCHAR(255)         null,
   STARTDATE            DATE                 null,
   ENDDATE              DATE                 null,
   CAPACITY             INT4                 null,
   FEE                  INT4                 null,
   DESCRIPTION          TEXT                 null,
   URL_IMAGE            TEXT                 NULL,
   constraint PK_COURSE primary key (COURSEID)
);

/*==============================================================*/
/* Index: CREATE_FK                                             */
/*==============================================================*/
create  index CREATE_FK on COURSE (
USERID
);

/*==============================================================*/
/* Table: DISABLE                                               */
/*==============================================================*/
create table DISABLE (
   COURSEID             INT4                 not null,
   USERID               INT4                 not null,
   UPDATED_AT           DATE                 not null,
   constraint PK_DISABLE primary key (COURSEID, USERID, UPDATED_AT)
);

/*==============================================================*/
/* Index: DISABLE2_FK                                           */
/*==============================================================*/
create  index DISABLE2_FK on DISABLE (
USERID
);

/*==============================================================*/
/* Index: DISABLE_FK                                            */
/*==============================================================*/
create  index DISABLE_FK on DISABLE (
COURSEID
);

/*==============================================================*/
/* Table: ENABLE                                                */
/*==============================================================*/
create table ENABLE (
   COURSEID             INT4                 not null,
   USERID               INT4                 not null,
   UPDATED_AT           DATE                 not null,
   constraint PK_ENABLE primary key (COURSEID, USERID, UPDATED_AT)
);

/*==============================================================*/
/* Index: ENABLE2_FK                                            */
/*==============================================================*/
create  index ENABLE2_FK on ENABLE (
USERID
);

/*==============================================================*/
/* Index: ENABLE_FK                                             */
/*==============================================================*/
create  index ENABLE_FK on ENABLE (
COURSEID
);

/*==============================================================*/
/* Table: "JOIN"                                                */
/*==============================================================*/
create table "JOIN" (
   COURSEID             INT4                 not null,
   USERID               INT4                 not null,
   REGISTERED_AT        DATE                 not null,
   constraint PK_JOIN primary key (COURSEID, USERID, REGISTERED_AT)
);

/*==============================================================*/
/* Index: JOIN2_FK                                              */
/*==============================================================*/
create  index JOIN2_FK on "JOIN" (
USERID
);

/*==============================================================*/
/* Index: JOIN_FK                                               */
/*==============================================================*/
create  index JOIN_FK on "JOIN" (
COURSEID
);

/*==============================================================*/
/* Table: REVIEW                                                */
/*==============================================================*/
create table REVIEW (
   COURSEID             INT4                 not null,
   USERID               INT4                 not null,
   STAR                 INT2                 null,
   REVIEW               TEXT                 null,
   UPDATED_AT           DATE                 null,
   constraint PK_REVIEW primary key (COURSEID, USERID)
);

/*==============================================================*/
/* Index: REVIEW2_FK                                            */
/*==============================================================*/
create  index REVIEW2_FK on REVIEW (
USERID
);

/*==============================================================*/
/* Index: REVIEW_FK                                             */
/*==============================================================*/
create  index REVIEW_FK on REVIEW (
COURSEID
);

/*==============================================================*/
/* Table: TEACHER                                               */
/*==============================================================*/
create table TEACHER (
   USERID               INT4                 not null,
   MAJOR                VARCHAR(255)         null,
   INTRODUCTION         TEXT                 null,
   constraint PK_TEACHER primary key (USERID)
);

/*==============================================================*/
/* Table: "USER"                                                */
/*==============================================================*/
create table "USER" (
   USERID               SERIAL               not null,
   FULLNAME             VARCHAR(50)          null,
   DATEOFBIRTH          DATE                 null,
   ADDRESS              VARCHAR(255)         null,
   EMAIL                VARCHAR(255)         null,
   PHONENUMBER          CHAR(10)             null,
   GENDER               CHAR(1)              null,
   AVATAR               TEXT                 null,
   ROLE                 NUMERIC              null,
   constraint PK_USER primary key (USERID)
);

/*==============================================================*/
/* Table: SCHEDULE                                                */
/*==============================================================*/
create table SCHEDULE (
   COURSEID             INT4               not null,
   DAY             	VARCHAR(10)          not null,
   TIME          	TIME                 null,
   constraint PK_SCHEDULE primary key (COURSEID, DAY)
);

alter table ACCOUNT
   add constraint FK_ACCOUNT_OWN_USER foreign key (USERID)
      references "USER" (USERID);

alter table BANKACCOUNT
   add constraint FK_BANKACCO_HAVE_USER foreign key (USERID)
      references "USER" (USERID);

alter table COURSE
   add constraint FK_COURSE_CREATE_TEACHER foreign key (USERID)
      references TEACHER (USERID);

alter table DISABLE
   add constraint FK_DISABLE_DISABLE_COURSE foreign key (COURSEID)
      references COURSE (COURSEID);

alter table DISABLE
   add constraint FK_DISABLE_DISABLE2_USER foreign key (USERID)
      references "USER" (USERID);

alter table ENABLE
   add constraint FK_ENABLE_ENABLE_COURSE foreign key (COURSEID)
      references COURSE (COURSEID);

alter table ENABLE
   add constraint FK_ENABLE_ENABLE2_USER foreign key (USERID)
      references "USER" (USERID);

alter table "JOIN"
   add constraint FK_JOIN_JOIN_COURSE foreign key (COURSEID)
      references COURSE (COURSEID);

alter table "JOIN"
   add constraint FK_JOIN_JOIN2_USER foreign key (USERID)
      references "USER" (USERID);

alter table REVIEW
   add constraint FK_REVIEW_REVIEW_COURSE foreign key (COURSEID)
      references COURSE (COURSEID);

alter table REVIEW
   add constraint FK_REVIEW_REVIEW2_USER foreign key (USERID)
      references "USER" (USERID);

alter table TEACHER
   add constraint FK_TEACHER_INHERITAN_USER foreign key (USERID)
      references "USER" (USERID);
	  
alter table SCHEDULE
   add constraint FK_COURSE_SCHEDULE foreign key (COURSEID)
      references COURSE (COURSEID);
