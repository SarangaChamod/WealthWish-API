CREATE TABLE "cashIncome" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "cashIncome_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"amount" double precision NOT NULL,
	"category" varchar(255) NOT NULL,
	"note" varchar(255) NOT NULL,
	"type" varchar(255),
	"event_date_time" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "cashExpenses" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "cashExpenses_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"amount" double precision NOT NULL,
	"category" varchar(255) NOT NULL,
	"note" varchar(255) NOT NULL,
	"type" varchar(255),
	"event_date_time" timestamp DEFAULT now() NOT NULL
);
