import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Movies" */
export type Movies = {
  __typename?: 'Movies';
  Description: Scalars['String'];
  Id: Scalars['Int'];
  PosterUrl: Scalars['String'];
  /** An array relationship */
  Ratings: Array<Ratings>;
  /** An aggregate relationship */
  Ratings_aggregate: Ratings_Aggregate;
  Title: Scalars['String'];
};


/** columns and relationships of "Movies" */
export type MoviesRatingsArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


/** columns and relationships of "Movies" */
export type MoviesRatings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};

/** aggregated selection of "Movies" */
export type Movies_Aggregate = {
  __typename?: 'Movies_aggregate';
  aggregate?: Maybe<Movies_Aggregate_Fields>;
  nodes: Array<Movies>;
};

/** aggregate fields of "Movies" */
export type Movies_Aggregate_Fields = {
  __typename?: 'Movies_aggregate_fields';
  avg?: Maybe<Movies_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Movies_Max_Fields>;
  min?: Maybe<Movies_Min_Fields>;
  stddev?: Maybe<Movies_Stddev_Fields>;
  stddev_pop?: Maybe<Movies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Movies_Stddev_Samp_Fields>;
  sum?: Maybe<Movies_Sum_Fields>;
  var_pop?: Maybe<Movies_Var_Pop_Fields>;
  var_samp?: Maybe<Movies_Var_Samp_Fields>;
  variance?: Maybe<Movies_Variance_Fields>;
};


/** aggregate fields of "Movies" */
export type Movies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Movies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Movies_Avg_Fields = {
  __typename?: 'Movies_avg_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Movies". All fields are combined with a logical 'AND'. */
export type Movies_Bool_Exp = {
  Description?: InputMaybe<String_Comparison_Exp>;
  Id?: InputMaybe<Int_Comparison_Exp>;
  PosterUrl?: InputMaybe<String_Comparison_Exp>;
  Ratings?: InputMaybe<Ratings_Bool_Exp>;
  Ratings_aggregate?: InputMaybe<Ratings_Aggregate_Bool_Exp>;
  Title?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Movies_Bool_Exp>>;
  _not?: InputMaybe<Movies_Bool_Exp>;
  _or?: InputMaybe<Array<Movies_Bool_Exp>>;
};

/** unique or primary key constraints on table "Movies" */
export enum Movies_Constraint {
  /** unique or primary key constraint on columns "Id" */
  MoviesPkey = 'Movies_pkey'
}

/** input type for incrementing numeric columns in table "Movies" */
export type Movies_Inc_Input = {
  Id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Movies" */
export type Movies_Insert_Input = {
  Description?: InputMaybe<Scalars['String']>;
  Id?: InputMaybe<Scalars['Int']>;
  PosterUrl?: InputMaybe<Scalars['String']>;
  Ratings?: InputMaybe<Ratings_Arr_Rel_Insert_Input>;
  Title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Movies_Max_Fields = {
  __typename?: 'Movies_max_fields';
  Description?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['Int']>;
  PosterUrl?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Movies_Min_Fields = {
  __typename?: 'Movies_min_fields';
  Description?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['Int']>;
  PosterUrl?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Movies" */
export type Movies_Mutation_Response = {
  __typename?: 'Movies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Movies>;
};

/** input type for inserting object relation for remote table "Movies" */
export type Movies_Obj_Rel_Insert_Input = {
  data: Movies_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Movies_On_Conflict>;
};

/** on_conflict condition type for table "Movies" */
export type Movies_On_Conflict = {
  constraint: Movies_Constraint;
  update_columns?: Array<Movies_Update_Column>;
  where?: InputMaybe<Movies_Bool_Exp>;
};

/** Ordering options when selecting data from "Movies". */
export type Movies_Order_By = {
  Description?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  PosterUrl?: InputMaybe<Order_By>;
  Ratings_aggregate?: InputMaybe<Ratings_Aggregate_Order_By>;
  Title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Movies */
export type Movies_Pk_Columns_Input = {
  Id: Scalars['Int'];
};

/** select columns of table "Movies" */
export enum Movies_Select_Column {
  /** column name */
  Description = 'Description',
  /** column name */
  Id = 'Id',
  /** column name */
  PosterUrl = 'PosterUrl',
  /** column name */
  Title = 'Title'
}

/** input type for updating data in table "Movies" */
export type Movies_Set_Input = {
  Description?: InputMaybe<Scalars['String']>;
  Id?: InputMaybe<Scalars['Int']>;
  PosterUrl?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Movies_Stddev_Fields = {
  __typename?: 'Movies_stddev_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Movies_Stddev_Pop_Fields = {
  __typename?: 'Movies_stddev_pop_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Movies_Stddev_Samp_Fields = {
  __typename?: 'Movies_stddev_samp_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "Movies" */
export type Movies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Movies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Movies_Stream_Cursor_Value_Input = {
  Description?: InputMaybe<Scalars['String']>;
  Id?: InputMaybe<Scalars['Int']>;
  PosterUrl?: InputMaybe<Scalars['String']>;
  Title?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Movies_Sum_Fields = {
  __typename?: 'Movies_sum_fields';
  Id?: Maybe<Scalars['Int']>;
};

/** update columns of table "Movies" */
export enum Movies_Update_Column {
  /** column name */
  Description = 'Description',
  /** column name */
  Id = 'Id',
  /** column name */
  PosterUrl = 'PosterUrl',
  /** column name */
  Title = 'Title'
}

export type Movies_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Movies_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Movies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Movies_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Movies_Var_Pop_Fields = {
  __typename?: 'Movies_var_pop_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Movies_Var_Samp_Fields = {
  __typename?: 'Movies_var_samp_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Movies_Variance_Fields = {
  __typename?: 'Movies_variance_fields';
  Id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "Profiles" */
export type Profiles = {
  __typename?: 'Profiles';
  Email: Scalars['String'];
  Id: Scalars['uuid'];
  Name: Scalars['String'];
  /** An array relationship */
  Ratings: Array<Ratings>;
  /** An aggregate relationship */
  Ratings_aggregate: Ratings_Aggregate;
};


/** columns and relationships of "Profiles" */
export type ProfilesRatingsArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


/** columns and relationships of "Profiles" */
export type ProfilesRatings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};

/** aggregated selection of "Profiles" */
export type Profiles_Aggregate = {
  __typename?: 'Profiles_aggregate';
  aggregate?: Maybe<Profiles_Aggregate_Fields>;
  nodes: Array<Profiles>;
};

/** aggregate fields of "Profiles" */
export type Profiles_Aggregate_Fields = {
  __typename?: 'Profiles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Profiles_Max_Fields>;
  min?: Maybe<Profiles_Min_Fields>;
};


/** aggregate fields of "Profiles" */
export type Profiles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  Email?: InputMaybe<String_Comparison_Exp>;
  Id?: InputMaybe<Uuid_Comparison_Exp>;
  Name?: InputMaybe<String_Comparison_Exp>;
  Ratings?: InputMaybe<Ratings_Bool_Exp>;
  Ratings_aggregate?: InputMaybe<Ratings_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
};

/** unique or primary key constraints on table "Profiles" */
export enum Profiles_Constraint {
  /** unique or primary key constraint on columns "Id" */
  ProfilesPkey = 'Profiles_pkey'
}

/** input type for inserting data into table "Profiles" */
export type Profiles_Insert_Input = {
  Email?: InputMaybe<Scalars['String']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Name?: InputMaybe<Scalars['String']>;
  Ratings?: InputMaybe<Ratings_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Profiles_Max_Fields = {
  __typename?: 'Profiles_max_fields';
  Email?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['uuid']>;
  Name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Profiles_Min_Fields = {
  __typename?: 'Profiles_min_fields';
  Email?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['uuid']>;
  Name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Profiles" */
export type Profiles_Mutation_Response = {
  __typename?: 'Profiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles>;
};

/** input type for inserting object relation for remote table "Profiles" */
export type Profiles_Obj_Rel_Insert_Input = {
  data: Profiles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};

/** on_conflict condition type for table "Profiles" */
export type Profiles_On_Conflict = {
  constraint: Profiles_Constraint;
  update_columns?: Array<Profiles_Update_Column>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "Profiles". */
export type Profiles_Order_By = {
  Email?: InputMaybe<Order_By>;
  Id?: InputMaybe<Order_By>;
  Name?: InputMaybe<Order_By>;
  Ratings_aggregate?: InputMaybe<Ratings_Aggregate_Order_By>;
};

/** primary key columns input for table: Profiles */
export type Profiles_Pk_Columns_Input = {
  Id: Scalars['uuid'];
};

/** select columns of table "Profiles" */
export enum Profiles_Select_Column {
  /** column name */
  Email = 'Email',
  /** column name */
  Id = 'Id',
  /** column name */
  Name = 'Name'
}

/** input type for updating data in table "Profiles" */
export type Profiles_Set_Input = {
  Email?: InputMaybe<Scalars['String']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Profiles" */
export type Profiles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profiles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profiles_Stream_Cursor_Value_Input = {
  Email?: InputMaybe<Scalars['String']>;
  Id?: InputMaybe<Scalars['uuid']>;
  Name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Profiles" */
export enum Profiles_Update_Column {
  /** column name */
  Email = 'Email',
  /** column name */
  Id = 'Id',
  /** column name */
  Name = 'Name'
}

export type Profiles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profiles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Profiles_Bool_Exp;
};

/** columns and relationships of "Ratings" */
export type Ratings = {
  __typename?: 'Ratings';
  /** An object relationship */
  Movie: Movies;
  MovieId: Scalars['Int'];
  /** An object relationship */
  Profile: Profiles;
  ProfileId: Scalars['uuid'];
  Rating: Scalars['Int'];
};

/** aggregated selection of "Ratings" */
export type Ratings_Aggregate = {
  __typename?: 'Ratings_aggregate';
  aggregate?: Maybe<Ratings_Aggregate_Fields>;
  nodes: Array<Ratings>;
};

export type Ratings_Aggregate_Bool_Exp = {
  count?: InputMaybe<Ratings_Aggregate_Bool_Exp_Count>;
};

export type Ratings_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Ratings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Ratings_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Ratings" */
export type Ratings_Aggregate_Fields = {
  __typename?: 'Ratings_aggregate_fields';
  avg?: Maybe<Ratings_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ratings_Max_Fields>;
  min?: Maybe<Ratings_Min_Fields>;
  stddev?: Maybe<Ratings_Stddev_Fields>;
  stddev_pop?: Maybe<Ratings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ratings_Stddev_Samp_Fields>;
  sum?: Maybe<Ratings_Sum_Fields>;
  var_pop?: Maybe<Ratings_Var_Pop_Fields>;
  var_samp?: Maybe<Ratings_Var_Samp_Fields>;
  variance?: Maybe<Ratings_Variance_Fields>;
};


/** aggregate fields of "Ratings" */
export type Ratings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ratings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Ratings" */
export type Ratings_Aggregate_Order_By = {
  avg?: InputMaybe<Ratings_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Ratings_Max_Order_By>;
  min?: InputMaybe<Ratings_Min_Order_By>;
  stddev?: InputMaybe<Ratings_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Ratings_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Ratings_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Ratings_Sum_Order_By>;
  var_pop?: InputMaybe<Ratings_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Ratings_Var_Samp_Order_By>;
  variance?: InputMaybe<Ratings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Ratings" */
export type Ratings_Arr_Rel_Insert_Input = {
  data: Array<Ratings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Ratings_On_Conflict>;
};

/** aggregate avg on columns */
export type Ratings_Avg_Fields = {
  __typename?: 'Ratings_avg_fields';
  MovieId?: Maybe<Scalars['Float']>;
  Rating?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Ratings" */
export type Ratings_Avg_Order_By = {
  MovieId?: InputMaybe<Order_By>;
  Rating?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Ratings". All fields are combined with a logical 'AND'. */
export type Ratings_Bool_Exp = {
  Movie?: InputMaybe<Movies_Bool_Exp>;
  MovieId?: InputMaybe<Int_Comparison_Exp>;
  Profile?: InputMaybe<Profiles_Bool_Exp>;
  ProfileId?: InputMaybe<Uuid_Comparison_Exp>;
  Rating?: InputMaybe<Int_Comparison_Exp>;
  _and?: InputMaybe<Array<Ratings_Bool_Exp>>;
  _not?: InputMaybe<Ratings_Bool_Exp>;
  _or?: InputMaybe<Array<Ratings_Bool_Exp>>;
};

/** unique or primary key constraints on table "Ratings" */
export enum Ratings_Constraint {
  /** unique or primary key constraint on columns "ProfileId", "MovieId" */
  RatingsProfileIdMovieIdKey = 'Ratings_ProfileId_MovieId_key',
  /** unique or primary key constraint on columns "ProfileId", "MovieId" */
  RatingsPkey = 'Ratings_pkey'
}

/** input type for incrementing numeric columns in table "Ratings" */
export type Ratings_Inc_Input = {
  MovieId?: InputMaybe<Scalars['Int']>;
  Rating?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Ratings" */
export type Ratings_Insert_Input = {
  Movie?: InputMaybe<Movies_Obj_Rel_Insert_Input>;
  MovieId?: InputMaybe<Scalars['Int']>;
  Profile?: InputMaybe<Profiles_Obj_Rel_Insert_Input>;
  ProfileId?: InputMaybe<Scalars['uuid']>;
  Rating?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Ratings_Max_Fields = {
  __typename?: 'Ratings_max_fields';
  MovieId?: Maybe<Scalars['Int']>;
  ProfileId?: Maybe<Scalars['uuid']>;
  Rating?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "Ratings" */
export type Ratings_Max_Order_By = {
  MovieId?: InputMaybe<Order_By>;
  ProfileId?: InputMaybe<Order_By>;
  Rating?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ratings_Min_Fields = {
  __typename?: 'Ratings_min_fields';
  MovieId?: Maybe<Scalars['Int']>;
  ProfileId?: Maybe<Scalars['uuid']>;
  Rating?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "Ratings" */
export type Ratings_Min_Order_By = {
  MovieId?: InputMaybe<Order_By>;
  ProfileId?: InputMaybe<Order_By>;
  Rating?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Ratings" */
export type Ratings_Mutation_Response = {
  __typename?: 'Ratings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ratings>;
};

/** on_conflict condition type for table "Ratings" */
export type Ratings_On_Conflict = {
  constraint: Ratings_Constraint;
  update_columns?: Array<Ratings_Update_Column>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};

/** Ordering options when selecting data from "Ratings". */
export type Ratings_Order_By = {
  Movie?: InputMaybe<Movies_Order_By>;
  MovieId?: InputMaybe<Order_By>;
  Profile?: InputMaybe<Profiles_Order_By>;
  ProfileId?: InputMaybe<Order_By>;
  Rating?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Ratings */
export type Ratings_Pk_Columns_Input = {
  MovieId: Scalars['Int'];
  ProfileId: Scalars['uuid'];
};

/** select columns of table "Ratings" */
export enum Ratings_Select_Column {
  /** column name */
  MovieId = 'MovieId',
  /** column name */
  ProfileId = 'ProfileId',
  /** column name */
  Rating = 'Rating'
}

/** input type for updating data in table "Ratings" */
export type Ratings_Set_Input = {
  MovieId?: InputMaybe<Scalars['Int']>;
  ProfileId?: InputMaybe<Scalars['uuid']>;
  Rating?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Ratings_Stddev_Fields = {
  __typename?: 'Ratings_stddev_fields';
  MovieId?: Maybe<Scalars['Float']>;
  Rating?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Ratings" */
export type Ratings_Stddev_Order_By = {
  MovieId?: InputMaybe<Order_By>;
  Rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ratings_Stddev_Pop_Fields = {
  __typename?: 'Ratings_stddev_pop_fields';
  MovieId?: Maybe<Scalars['Float']>;
  Rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Ratings" */
export type Ratings_Stddev_Pop_Order_By = {
  MovieId?: InputMaybe<Order_By>;
  Rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ratings_Stddev_Samp_Fields = {
  __typename?: 'Ratings_stddev_samp_fields';
  MovieId?: Maybe<Scalars['Float']>;
  Rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Ratings" */
export type Ratings_Stddev_Samp_Order_By = {
  MovieId?: InputMaybe<Order_By>;
  Rating?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Ratings" */
export type Ratings_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ratings_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ratings_Stream_Cursor_Value_Input = {
  MovieId?: InputMaybe<Scalars['Int']>;
  ProfileId?: InputMaybe<Scalars['uuid']>;
  Rating?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Ratings_Sum_Fields = {
  __typename?: 'Ratings_sum_fields';
  MovieId?: Maybe<Scalars['Int']>;
  Rating?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Ratings" */
export type Ratings_Sum_Order_By = {
  MovieId?: InputMaybe<Order_By>;
  Rating?: InputMaybe<Order_By>;
};

/** update columns of table "Ratings" */
export enum Ratings_Update_Column {
  /** column name */
  MovieId = 'MovieId',
  /** column name */
  ProfileId = 'ProfileId',
  /** column name */
  Rating = 'Rating'
}

export type Ratings_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ratings_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ratings_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ratings_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ratings_Var_Pop_Fields = {
  __typename?: 'Ratings_var_pop_fields';
  MovieId?: Maybe<Scalars['Float']>;
  Rating?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Ratings" */
export type Ratings_Var_Pop_Order_By = {
  MovieId?: InputMaybe<Order_By>;
  Rating?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ratings_Var_Samp_Fields = {
  __typename?: 'Ratings_var_samp_fields';
  MovieId?: Maybe<Scalars['Float']>;
  Rating?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Ratings" */
export type Ratings_Var_Samp_Order_By = {
  MovieId?: InputMaybe<Order_By>;
  Rating?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ratings_Variance_Fields = {
  __typename?: 'Ratings_variance_fields';
  MovieId?: Maybe<Scalars['Float']>;
  Rating?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Ratings" */
export type Ratings_Variance_Order_By = {
  MovieId?: InputMaybe<Order_By>;
  Rating?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Movies" */
  delete_Movies?: Maybe<Movies_Mutation_Response>;
  /** delete single row from the table: "Movies" */
  delete_Movies_by_pk?: Maybe<Movies>;
  /** delete data from the table: "Profiles" */
  delete_Profiles?: Maybe<Profiles_Mutation_Response>;
  /** delete single row from the table: "Profiles" */
  delete_Profiles_by_pk?: Maybe<Profiles>;
  /** delete data from the table: "Ratings" */
  delete_Ratings?: Maybe<Ratings_Mutation_Response>;
  /** delete single row from the table: "Ratings" */
  delete_Ratings_by_pk?: Maybe<Ratings>;
  /** insert data into the table: "Movies" */
  insert_Movies?: Maybe<Movies_Mutation_Response>;
  /** insert a single row into the table: "Movies" */
  insert_Movies_one?: Maybe<Movies>;
  /** insert data into the table: "Profiles" */
  insert_Profiles?: Maybe<Profiles_Mutation_Response>;
  /** insert a single row into the table: "Profiles" */
  insert_Profiles_one?: Maybe<Profiles>;
  /** insert data into the table: "Ratings" */
  insert_Ratings?: Maybe<Ratings_Mutation_Response>;
  /** insert a single row into the table: "Ratings" */
  insert_Ratings_one?: Maybe<Ratings>;
  /** update data of the table: "Movies" */
  update_Movies?: Maybe<Movies_Mutation_Response>;
  /** update single row of the table: "Movies" */
  update_Movies_by_pk?: Maybe<Movies>;
  /** update multiples rows of table: "Movies" */
  update_Movies_many?: Maybe<Array<Maybe<Movies_Mutation_Response>>>;
  /** update data of the table: "Profiles" */
  update_Profiles?: Maybe<Profiles_Mutation_Response>;
  /** update single row of the table: "Profiles" */
  update_Profiles_by_pk?: Maybe<Profiles>;
  /** update multiples rows of table: "Profiles" */
  update_Profiles_many?: Maybe<Array<Maybe<Profiles_Mutation_Response>>>;
  /** update data of the table: "Ratings" */
  update_Ratings?: Maybe<Ratings_Mutation_Response>;
  /** update single row of the table: "Ratings" */
  update_Ratings_by_pk?: Maybe<Ratings>;
  /** update multiples rows of table: "Ratings" */
  update_Ratings_many?: Maybe<Array<Maybe<Ratings_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_MoviesArgs = {
  where: Movies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Movies_By_PkArgs = {
  Id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ProfilesArgs = {
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profiles_By_PkArgs = {
  Id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RatingsArgs = {
  where: Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ratings_By_PkArgs = {
  MovieId: Scalars['Int'];
  ProfileId: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_MoviesArgs = {
  objects: Array<Movies_Insert_Input>;
  on_conflict?: InputMaybe<Movies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Movies_OneArgs = {
  object: Movies_Insert_Input;
  on_conflict?: InputMaybe<Movies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfilesArgs = {
  objects: Array<Profiles_Insert_Input>;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profiles_OneArgs = {
  object: Profiles_Insert_Input;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RatingsArgs = {
  objects: Array<Ratings_Insert_Input>;
  on_conflict?: InputMaybe<Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ratings_OneArgs = {
  object: Ratings_Insert_Input;
  on_conflict?: InputMaybe<Ratings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_MoviesArgs = {
  _inc?: InputMaybe<Movies_Inc_Input>;
  _set?: InputMaybe<Movies_Set_Input>;
  where: Movies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Movies_By_PkArgs = {
  _inc?: InputMaybe<Movies_Inc_Input>;
  _set?: InputMaybe<Movies_Set_Input>;
  pk_columns: Movies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Movies_ManyArgs = {
  updates: Array<Movies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProfilesArgs = {
  _set?: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_By_PkArgs = {
  _set?: InputMaybe<Profiles_Set_Input>;
  pk_columns: Profiles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_ManyArgs = {
  updates: Array<Profiles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RatingsArgs = {
  _inc?: InputMaybe<Ratings_Inc_Input>;
  _set?: InputMaybe<Ratings_Set_Input>;
  where: Ratings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ratings_By_PkArgs = {
  _inc?: InputMaybe<Ratings_Inc_Input>;
  _set?: InputMaybe<Ratings_Set_Input>;
  pk_columns: Ratings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ratings_ManyArgs = {
  updates: Array<Ratings_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Movies" */
  Movies: Array<Movies>;
  /** fetch aggregated fields from the table: "Movies" */
  Movies_aggregate: Movies_Aggregate;
  /** fetch data from the table: "Movies" using primary key columns */
  Movies_by_pk?: Maybe<Movies>;
  /** fetch data from the table: "Profiles" */
  Profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "Profiles" */
  Profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "Profiles" using primary key columns */
  Profiles_by_pk?: Maybe<Profiles>;
  /** An array relationship */
  Ratings: Array<Ratings>;
  /** An aggregate relationship */
  Ratings_aggregate: Ratings_Aggregate;
  /** fetch data from the table: "Ratings" using primary key columns */
  Ratings_by_pk?: Maybe<Ratings>;
};


export type Query_RootMoviesArgs = {
  distinct_on?: InputMaybe<Array<Movies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Movies_Order_By>>;
  where?: InputMaybe<Movies_Bool_Exp>;
};


export type Query_RootMovies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Movies_Order_By>>;
  where?: InputMaybe<Movies_Bool_Exp>;
};


export type Query_RootMovies_By_PkArgs = {
  Id: Scalars['Int'];
};


export type Query_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_By_PkArgs = {
  Id: Scalars['uuid'];
};


export type Query_RootRatingsArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


export type Query_RootRatings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


export type Query_RootRatings_By_PkArgs = {
  MovieId: Scalars['Int'];
  ProfileId: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Movies" */
  Movies: Array<Movies>;
  /** fetch aggregated fields from the table: "Movies" */
  Movies_aggregate: Movies_Aggregate;
  /** fetch data from the table: "Movies" using primary key columns */
  Movies_by_pk?: Maybe<Movies>;
  /** fetch data from the table in a streaming manner: "Movies" */
  Movies_stream: Array<Movies>;
  /** fetch data from the table: "Profiles" */
  Profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "Profiles" */
  Profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "Profiles" using primary key columns */
  Profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table in a streaming manner: "Profiles" */
  Profiles_stream: Array<Profiles>;
  /** An array relationship */
  Ratings: Array<Ratings>;
  /** An aggregate relationship */
  Ratings_aggregate: Ratings_Aggregate;
  /** fetch data from the table: "Ratings" using primary key columns */
  Ratings_by_pk?: Maybe<Ratings>;
  /** fetch data from the table in a streaming manner: "Ratings" */
  Ratings_stream: Array<Ratings>;
};


export type Subscription_RootMoviesArgs = {
  distinct_on?: InputMaybe<Array<Movies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Movies_Order_By>>;
  where?: InputMaybe<Movies_Bool_Exp>;
};


export type Subscription_RootMovies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Movies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Movies_Order_By>>;
  where?: InputMaybe<Movies_Bool_Exp>;
};


export type Subscription_RootMovies_By_PkArgs = {
  Id: Scalars['Int'];
};


export type Subscription_RootMovies_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Movies_Stream_Cursor_Input>>;
  where?: InputMaybe<Movies_Bool_Exp>;
};


export type Subscription_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_By_PkArgs = {
  Id: Scalars['uuid'];
};


export type Subscription_RootProfiles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Profiles_Stream_Cursor_Input>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootRatingsArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


export type Subscription_RootRatings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ratings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ratings_Order_By>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};


export type Subscription_RootRatings_By_PkArgs = {
  MovieId: Scalars['Int'];
  ProfileId: Scalars['uuid'];
};


export type Subscription_RootRatings_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Ratings_Stream_Cursor_Input>>;
  where?: InputMaybe<Ratings_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type ListMoviesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  titleFilter?: InputMaybe<Scalars['String']>;
}>;


export type ListMoviesQuery = { __typename?: 'query_root', Movies: Array<{ __typename?: 'Movies', Title: string, Id: number, PosterUrl: string, Description: string, Ratings_aggregate: { __typename?: 'Ratings_aggregate', aggregate?: { __typename?: 'Ratings_aggregate_fields', avg?: { __typename?: 'Ratings_avg_fields', Rating?: number | null } | null } | null } }> };

export type ListMovieTitlesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  titleFilter?: InputMaybe<Scalars['String']>;
}>;


export type ListMovieTitlesQuery = { __typename?: 'query_root', Movies: Array<{ __typename?: 'Movies', Title: string }> };

export type MovieQueryVariables = Exact<{
  movieId?: InputMaybe<Scalars['Int']>;
}>;


export type MovieQuery = { __typename?: 'query_root', Movies: Array<{ __typename?: 'Movies', PosterUrl: string, Title: string, Description: string, Ratings_aggregate: { __typename?: 'Ratings_aggregate', aggregate?: { __typename?: 'Ratings_aggregate_fields', avg?: { __typename?: 'Ratings_avg_fields', Rating?: number | null } | null } | null } }> };

export type MovieRatingsSubscriptionVariables = Exact<{
  movieId?: InputMaybe<Scalars['Int']>;
}>;


export type MovieRatingsSubscription = { __typename?: 'subscription_root', Ratings: Array<{ __typename?: 'Ratings', Rating: number, Profile: { __typename?: 'Profiles', Id: any, Name: string } }> };

export type UpsertProfileMutationVariables = Exact<{
  Id?: InputMaybe<Scalars['uuid']>;
  Name?: InputMaybe<Scalars['String']>;
  Email?: InputMaybe<Scalars['String']>;
}>;


export type UpsertProfileMutation = { __typename?: 'mutation_root', insert_Profiles_one?: { __typename?: 'Profiles', Id: any } | null };

export type ProfileQueryVariables = Exact<{
  Id?: InputMaybe<Scalars['uuid']>;
}>;


export type ProfileQuery = { __typename?: 'query_root', Profiles: Array<{ __typename?: 'Profiles', Id: any }> };

export type RatingMutationVariables = Exact<{
  Rating?: InputMaybe<Scalars['Int']>;
  ProfileId?: InputMaybe<Scalars['uuid']>;
  MovieId?: InputMaybe<Scalars['Int']>;
}>;


export type RatingMutation = { __typename?: 'mutation_root', insert_Ratings?: { __typename?: 'Ratings_mutation_response', returning: Array<{ __typename?: 'Ratings', Rating: number }> } | null };


export const ListMoviesDocument = gql`
    query ListMovies($limit: Int = 20, $titleFilter: String = "%%") {
  Movies(limit: $limit, where: {Title: {_ilike: $titleFilter}}) {
    Title
    Id
    PosterUrl
    Description
    Ratings_aggregate {
      aggregate {
        avg {
          Rating
        }
      }
    }
  }
}
    `;

/**
 * __useListMoviesQuery__
 *
 * To run a query within a React component, call `useListMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListMoviesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      titleFilter: // value for 'titleFilter'
 *   },
 * });
 */
export function useListMoviesQuery(baseOptions?: Apollo.QueryHookOptions<ListMoviesQuery, ListMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListMoviesQuery, ListMoviesQueryVariables>(ListMoviesDocument, options);
      }
export function useListMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListMoviesQuery, ListMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListMoviesQuery, ListMoviesQueryVariables>(ListMoviesDocument, options);
        }
export type ListMoviesQueryHookResult = ReturnType<typeof useListMoviesQuery>;
export type ListMoviesLazyQueryHookResult = ReturnType<typeof useListMoviesLazyQuery>;
export type ListMoviesQueryResult = Apollo.QueryResult<ListMoviesQuery, ListMoviesQueryVariables>;
export const ListMovieTitlesDocument = gql`
    query ListMovieTitles($limit: Int = 8, $titleFilter: String = "%%") {
  Movies(limit: $limit, where: {Title: {_ilike: $titleFilter}}) {
    Title
  }
}
    `;

/**
 * __useListMovieTitlesQuery__
 *
 * To run a query within a React component, call `useListMovieTitlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListMovieTitlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListMovieTitlesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      titleFilter: // value for 'titleFilter'
 *   },
 * });
 */
export function useListMovieTitlesQuery(baseOptions?: Apollo.QueryHookOptions<ListMovieTitlesQuery, ListMovieTitlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListMovieTitlesQuery, ListMovieTitlesQueryVariables>(ListMovieTitlesDocument, options);
      }
export function useListMovieTitlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListMovieTitlesQuery, ListMovieTitlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListMovieTitlesQuery, ListMovieTitlesQueryVariables>(ListMovieTitlesDocument, options);
        }
export type ListMovieTitlesQueryHookResult = ReturnType<typeof useListMovieTitlesQuery>;
export type ListMovieTitlesLazyQueryHookResult = ReturnType<typeof useListMovieTitlesLazyQuery>;
export type ListMovieTitlesQueryResult = Apollo.QueryResult<ListMovieTitlesQuery, ListMovieTitlesQueryVariables>;
export const MovieDocument = gql`
    query Movie($movieId: Int) {
  Movies(where: {Id: {_eq: $movieId}}) {
    PosterUrl
    Title
    Description
    Ratings_aggregate {
      aggregate {
        avg {
          Rating
        }
      }
    }
  }
}
    `;

/**
 * __useMovieQuery__
 *
 * To run a query within a React component, call `useMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useMovieQuery(baseOptions?: Apollo.QueryHookOptions<MovieQuery, MovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MovieQuery, MovieQueryVariables>(MovieDocument, options);
      }
export function useMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieQuery, MovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MovieQuery, MovieQueryVariables>(MovieDocument, options);
        }
export type MovieQueryHookResult = ReturnType<typeof useMovieQuery>;
export type MovieLazyQueryHookResult = ReturnType<typeof useMovieLazyQuery>;
export type MovieQueryResult = Apollo.QueryResult<MovieQuery, MovieQueryVariables>;
export const MovieRatingsDocument = gql`
    subscription MovieRatings($movieId: Int) {
  Ratings(where: {MovieId: {_eq: $movieId}}) {
    Rating
    Profile {
      Id
      Name
    }
  }
}
    `;

/**
 * __useMovieRatingsSubscription__
 *
 * To run a query within a React component, call `useMovieRatingsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMovieRatingsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieRatingsSubscription({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useMovieRatingsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<MovieRatingsSubscription, MovieRatingsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MovieRatingsSubscription, MovieRatingsSubscriptionVariables>(MovieRatingsDocument, options);
      }
export type MovieRatingsSubscriptionHookResult = ReturnType<typeof useMovieRatingsSubscription>;
export type MovieRatingsSubscriptionResult = Apollo.SubscriptionResult<MovieRatingsSubscription>;
export const UpsertProfileDocument = gql`
    mutation UpsertProfile($Id: uuid, $Name: String, $Email: String) {
  insert_Profiles_one(
    object: {Id: $Id, Name: $Name, Email: $Email}
    on_conflict: {update_columns: Name, constraint: Profiles_pkey}
  ) {
    Id
  }
}
    `;
export type UpsertProfileMutationFn = Apollo.MutationFunction<UpsertProfileMutation, UpsertProfileMutationVariables>;

/**
 * __useUpsertProfileMutation__
 *
 * To run a mutation, you first call `useUpsertProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertProfileMutation, { data, loading, error }] = useUpsertProfileMutation({
 *   variables: {
 *      Id: // value for 'Id'
 *      Name: // value for 'Name'
 *      Email: // value for 'Email'
 *   },
 * });
 */
export function useUpsertProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpsertProfileMutation, UpsertProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertProfileMutation, UpsertProfileMutationVariables>(UpsertProfileDocument, options);
      }
export type UpsertProfileMutationHookResult = ReturnType<typeof useUpsertProfileMutation>;
export type UpsertProfileMutationResult = Apollo.MutationResult<UpsertProfileMutation>;
export type UpsertProfileMutationOptions = Apollo.BaseMutationOptions<UpsertProfileMutation, UpsertProfileMutationVariables>;
export const ProfileDocument = gql`
    query Profile($Id: uuid) {
  Profiles(where: {Id: {_eq: $Id}}) {
    Id
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      Id: // value for 'Id'
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const RatingDocument = gql`
    mutation Rating($Rating: Int = 10, $ProfileId: uuid = "", $MovieId: Int) {
  insert_Ratings(
    objects: {ProfileId: $ProfileId, Rating: $Rating, MovieId: $MovieId}
    on_conflict: {constraint: Ratings_pkey, update_columns: Rating}
  ) {
    returning {
      Rating
    }
  }
}
    `;
export type RatingMutationFn = Apollo.MutationFunction<RatingMutation, RatingMutationVariables>;

/**
 * __useRatingMutation__
 *
 * To run a mutation, you first call `useRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [ratingMutation, { data, loading, error }] = useRatingMutation({
 *   variables: {
 *      Rating: // value for 'Rating'
 *      ProfileId: // value for 'ProfileId'
 *      MovieId: // value for 'MovieId'
 *   },
 * });
 */
export function useRatingMutation(baseOptions?: Apollo.MutationHookOptions<RatingMutation, RatingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RatingMutation, RatingMutationVariables>(RatingDocument, options);
      }
export type RatingMutationHookResult = ReturnType<typeof useRatingMutation>;
export type RatingMutationResult = Apollo.MutationResult<RatingMutation>;
export type RatingMutationOptions = Apollo.BaseMutationOptions<RatingMutation, RatingMutationVariables>;