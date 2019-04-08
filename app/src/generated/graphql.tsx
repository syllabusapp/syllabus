export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [],
  },
};

export default result;

type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthPayload = {
  token: Scalars['String'];
  user: User;
};

export type Mutation = {
  addProduct: StripeProductPayload;
  changePassword: UserIdPayload;
  confirmAccount: AuthPayload;
  login: AuthPayload;
  resetPassword: UserIdPayload;
  signup: AuthPayload;
  triggerAccountConfirmationEmail: TriggerEmailPayload;
  triggerPasswordReset: TriggerEmailPayload;
};

export type MutationAddProductArgs = {
  name: Scalars['String'];
  type: ProductTypeType;
};

export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type MutationConfirmAccountArgs = {
  email: Scalars['String'];
  emailConfirmToken: Scalars['String'];
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationResetPasswordArgs = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  resetToken: Scalars['String'];
};

export type MutationSignupArgs = {
  data: SignUpInput;
};

export type MutationTriggerAccountConfirmationEmailArgs = {
  email: Scalars['String'];
};

export type MutationTriggerPasswordResetArgs = {
  email: Scalars['String'];
};

export type Organization = {
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users?: Maybe<Array<User>>;
};

export type OrganizationUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type OrganizationWhereInput = {
  AND?: Maybe<Array<OrganizationWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  NOT?: Maybe<Array<OrganizationWhereInput>>;
  OR?: Maybe<Array<OrganizationWhereInput>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  users_every?: Maybe<UserWhereInput>;
  users_none?: Maybe<UserWhereInput>;
  users_some?: Maybe<UserWhereInput>;
};

export type Plan = {
  amount?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  nickname: Scalars['String'];
  product: Product;
  updatedAt: Scalars['DateTime'];
};

export type PlanWhereInput = {
  amount?: Maybe<Scalars['Int']>;
  amount_gt?: Maybe<Scalars['Int']>;
  amount_gte?: Maybe<Scalars['Int']>;
  amount_in?: Maybe<Array<Scalars['Int']>>;
  amount_lt?: Maybe<Scalars['Int']>;
  amount_lte?: Maybe<Scalars['Int']>;
  amount_not?: Maybe<Scalars['Int']>;
  amount_not_in?: Maybe<Array<Scalars['Int']>>;
  AND?: Maybe<Array<PlanWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  nickname?: Maybe<Scalars['String']>;
  nickname_contains?: Maybe<Scalars['String']>;
  nickname_ends_with?: Maybe<Scalars['String']>;
  nickname_gt?: Maybe<Scalars['String']>;
  nickname_gte?: Maybe<Scalars['String']>;
  nickname_in?: Maybe<Array<Scalars['String']>>;
  nickname_lt?: Maybe<Scalars['String']>;
  nickname_lte?: Maybe<Scalars['String']>;
  nickname_not?: Maybe<Scalars['String']>;
  nickname_not_contains?: Maybe<Scalars['String']>;
  nickname_not_ends_with?: Maybe<Scalars['String']>;
  nickname_not_in?: Maybe<Array<Scalars['String']>>;
  nickname_not_starts_with?: Maybe<Scalars['String']>;
  nickname_starts_with?: Maybe<Scalars['String']>;
  NOT?: Maybe<Array<PlanWhereInput>>;
  OR?: Maybe<Array<PlanWhereInput>>;
  product?: Maybe<ProductWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export type Product = {
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  stripeId: Scalars['ID'];
  type: ProductTypeType;
  updatedAt: Scalars['DateTime'];
};

export enum ProductTypeType {
  Good = 'Good',
  Service = 'Service',
}

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  stripeId?: Maybe<Scalars['ID']>;
  stripeId_contains?: Maybe<Scalars['ID']>;
  stripeId_ends_with?: Maybe<Scalars['ID']>;
  stripeId_gt?: Maybe<Scalars['ID']>;
  stripeId_gte?: Maybe<Scalars['ID']>;
  stripeId_in?: Maybe<Array<Scalars['ID']>>;
  stripeId_lt?: Maybe<Scalars['ID']>;
  stripeId_lte?: Maybe<Scalars['ID']>;
  stripeId_not?: Maybe<Scalars['ID']>;
  stripeId_not_contains?: Maybe<Scalars['ID']>;
  stripeId_not_ends_with?: Maybe<Scalars['ID']>;
  stripeId_not_in?: Maybe<Array<Scalars['ID']>>;
  stripeId_not_starts_with?: Maybe<Scalars['ID']>;
  stripeId_starts_with?: Maybe<Scalars['ID']>;
  type?: Maybe<ProductTypeType>;
  type_in?: Maybe<Array<ProductTypeType>>;
  type_not?: Maybe<ProductTypeType>;
  type_not_in?: Maybe<Array<ProductTypeType>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export type Query = {
  currentUser: User;
};

export type Role = {
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export enum RoleOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type RoleWhereInput = {
  AND?: Maybe<Array<RoleWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  NOT?: Maybe<Array<RoleWhereInput>>;
  OR?: Maybe<Array<RoleWhereInput>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export type Setting = {
  createdAt: Scalars['DateTime'];
  isGDPR?: Maybe<Scalars['Boolean']>;
  key: Scalars['String'];
  label: Scalars['String'];
  lastUpdatedByUser?: Maybe<Scalars['DateTime']>;
  type: SettingTypeType;
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['Boolean']>;
};

export enum SettingOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsGdprAsc = 'isGDPR_ASC',
  IsGdprDesc = 'isGDPR_DESC',
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  LastUpdatedByUserAsc = 'lastUpdatedByUser_ASC',
  LastUpdatedByUserDesc = 'lastUpdatedByUser_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
}

export enum SettingTypeType {
  Boolean = 'Boolean',
  Number = 'Number',
  String = 'String',
}

export type SettingWhereInput = {
  AND?: Maybe<Array<SettingWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isGDPR?: Maybe<Scalars['Boolean']>;
  isGDPR_not?: Maybe<Scalars['Boolean']>;
  key?: Maybe<Scalars['String']>;
  key_contains?: Maybe<Scalars['String']>;
  key_ends_with?: Maybe<Scalars['String']>;
  key_gt?: Maybe<Scalars['String']>;
  key_gte?: Maybe<Scalars['String']>;
  key_in?: Maybe<Array<Scalars['String']>>;
  key_lt?: Maybe<Scalars['String']>;
  key_lte?: Maybe<Scalars['String']>;
  key_not?: Maybe<Scalars['String']>;
  key_not_contains?: Maybe<Scalars['String']>;
  key_not_ends_with?: Maybe<Scalars['String']>;
  key_not_in?: Maybe<Array<Scalars['String']>>;
  key_not_starts_with?: Maybe<Scalars['String']>;
  key_starts_with?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  label_contains?: Maybe<Scalars['String']>;
  label_ends_with?: Maybe<Scalars['String']>;
  label_gt?: Maybe<Scalars['String']>;
  label_gte?: Maybe<Scalars['String']>;
  label_in?: Maybe<Array<Scalars['String']>>;
  label_lt?: Maybe<Scalars['String']>;
  label_lte?: Maybe<Scalars['String']>;
  label_not?: Maybe<Scalars['String']>;
  label_not_contains?: Maybe<Scalars['String']>;
  label_not_ends_with?: Maybe<Scalars['String']>;
  label_not_in?: Maybe<Array<Scalars['String']>>;
  label_not_starts_with?: Maybe<Scalars['String']>;
  label_starts_with?: Maybe<Scalars['String']>;
  lastUpdatedByUser?: Maybe<Scalars['DateTime']>;
  lastUpdatedByUser_gt?: Maybe<Scalars['DateTime']>;
  lastUpdatedByUser_gte?: Maybe<Scalars['DateTime']>;
  lastUpdatedByUser_in?: Maybe<Array<Scalars['DateTime']>>;
  lastUpdatedByUser_lt?: Maybe<Scalars['DateTime']>;
  lastUpdatedByUser_lte?: Maybe<Scalars['DateTime']>;
  lastUpdatedByUser_not?: Maybe<Scalars['DateTime']>;
  lastUpdatedByUser_not_in?: Maybe<Array<Scalars['DateTime']>>;
  NOT?: Maybe<Array<SettingWhereInput>>;
  OR?: Maybe<Array<SettingWhereInput>>;
  type?: Maybe<SettingTypeType>;
  type_in?: Maybe<Array<SettingTypeType>>;
  type_not?: Maybe<SettingTypeType>;
  type_not_in?: Maybe<Array<SettingTypeType>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
  value?: Maybe<Scalars['Boolean']>;
  value_not?: Maybe<Scalars['Boolean']>;
};

export type SignUpInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type StripeProductPayload = {
  name: Scalars['String'];
  stripeId: Scalars['ID'];
  type: ProductTypeType;
};

export type StripeSubscription = {
  createdAt: Scalars['DateTime'];
  customer: User;
  plan: Plan;
  quantity?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type StripeSubscriptionWhereInput = {
  AND?: Maybe<Array<StripeSubscriptionWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  customer?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  NOT?: Maybe<Array<StripeSubscriptionWhereInput>>;
  OR?: Maybe<Array<StripeSubscriptionWhereInput>>;
  plan?: Maybe<PlanWhereInput>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_gt?: Maybe<Scalars['Int']>;
  quantity_gte?: Maybe<Scalars['Int']>;
  quantity_in?: Maybe<Array<Scalars['Int']>>;
  quantity_lt?: Maybe<Scalars['Int']>;
  quantity_lte?: Maybe<Scalars['Int']>;
  quantity_not?: Maybe<Scalars['Int']>;
  quantity_not_in?: Maybe<Array<Scalars['Int']>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export type TriggerEmailPayload = {
  ok: Scalars['Boolean'];
};

export type User = {
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmed: Scalars['Boolean'];
  emailConfirmToken?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName: Scalars['String'];
  organization: Organization;
  password: Scalars['String'];
  resetExpires?: Maybe<Scalars['DateTime']>;
  resetToken?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Role>>;
  settings?: Maybe<Array<Setting>>;
  subscription?: Maybe<StripeSubscription>;
  updatedAt: Scalars['DateTime'];
  updatedBy?: Maybe<User>;
};

export type UserRolesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RoleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<RoleWhereInput>;
};

export type UserSettingsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<SettingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<SettingWhereInput>;
};

export type UserIdPayload = {
  id: Scalars['String'];
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EmailConfirmedAsc = 'emailConfirmed_ASC',
  EmailConfirmedDesc = 'emailConfirmed_DESC',
  EmailConfirmTokenAsc = 'emailConfirmToken_ASC',
  EmailConfirmTokenDesc = 'emailConfirmToken_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LastLoginAsc = 'lastLogin_ASC',
  LastLoginDesc = 'lastLogin_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  ResetExpiresAsc = 'resetExpires_ASC',
  ResetExpiresDesc = 'resetExpires_DESC',
  ResetTokenAsc = 'resetToken_ASC',
  ResetTokenDesc = 'resetToken_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdBy?: Maybe<UserWhereInput>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  deletedAt_gt?: Maybe<Scalars['DateTime']>;
  deletedAt_gte?: Maybe<Scalars['DateTime']>;
  deletedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  deletedAt_lt?: Maybe<Scalars['DateTime']>;
  deletedAt_lte?: Maybe<Scalars['DateTime']>;
  deletedAt_not?: Maybe<Scalars['DateTime']>;
  deletedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  email?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Scalars['String']>>;
  email_lt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_not_in?: Maybe<Array<Scalars['String']>>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  emailConfirmed_not?: Maybe<Scalars['Boolean']>;
  emailConfirmToken?: Maybe<Scalars['String']>;
  emailConfirmToken_contains?: Maybe<Scalars['String']>;
  emailConfirmToken_ends_with?: Maybe<Scalars['String']>;
  emailConfirmToken_gt?: Maybe<Scalars['String']>;
  emailConfirmToken_gte?: Maybe<Scalars['String']>;
  emailConfirmToken_in?: Maybe<Array<Scalars['String']>>;
  emailConfirmToken_lt?: Maybe<Scalars['String']>;
  emailConfirmToken_lte?: Maybe<Scalars['String']>;
  emailConfirmToken_not?: Maybe<Scalars['String']>;
  emailConfirmToken_not_contains?: Maybe<Scalars['String']>;
  emailConfirmToken_not_ends_with?: Maybe<Scalars['String']>;
  emailConfirmToken_not_in?: Maybe<Array<Scalars['String']>>;
  emailConfirmToken_not_starts_with?: Maybe<Scalars['String']>;
  emailConfirmToken_starts_with?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_contains?: Maybe<Scalars['String']>;
  firstName_ends_with?: Maybe<Scalars['String']>;
  firstName_gt?: Maybe<Scalars['String']>;
  firstName_gte?: Maybe<Scalars['String']>;
  firstName_in?: Maybe<Array<Scalars['String']>>;
  firstName_lt?: Maybe<Scalars['String']>;
  firstName_lte?: Maybe<Scalars['String']>;
  firstName_not?: Maybe<Scalars['String']>;
  firstName_not_contains?: Maybe<Scalars['String']>;
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  firstName_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastLogin_gt?: Maybe<Scalars['DateTime']>;
  lastLogin_gte?: Maybe<Scalars['DateTime']>;
  lastLogin_in?: Maybe<Array<Scalars['DateTime']>>;
  lastLogin_lt?: Maybe<Scalars['DateTime']>;
  lastLogin_lte?: Maybe<Scalars['DateTime']>;
  lastLogin_not?: Maybe<Scalars['DateTime']>;
  lastLogin_not_in?: Maybe<Array<Scalars['DateTime']>>;
  lastName?: Maybe<Scalars['String']>;
  lastName_contains?: Maybe<Scalars['String']>;
  lastName_ends_with?: Maybe<Scalars['String']>;
  lastName_gt?: Maybe<Scalars['String']>;
  lastName_gte?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Scalars['String']>>;
  lastName_lt?: Maybe<Scalars['String']>;
  lastName_lte?: Maybe<Scalars['String']>;
  lastName_not?: Maybe<Scalars['String']>;
  lastName_not_contains?: Maybe<Scalars['String']>;
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  lastName_starts_with?: Maybe<Scalars['String']>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  organization?: Maybe<OrganizationWhereInput>;
  password?: Maybe<Scalars['String']>;
  password_contains?: Maybe<Scalars['String']>;
  password_ends_with?: Maybe<Scalars['String']>;
  password_gt?: Maybe<Scalars['String']>;
  password_gte?: Maybe<Scalars['String']>;
  password_in?: Maybe<Array<Scalars['String']>>;
  password_lt?: Maybe<Scalars['String']>;
  password_lte?: Maybe<Scalars['String']>;
  password_not?: Maybe<Scalars['String']>;
  password_not_contains?: Maybe<Scalars['String']>;
  password_not_ends_with?: Maybe<Scalars['String']>;
  password_not_in?: Maybe<Array<Scalars['String']>>;
  password_not_starts_with?: Maybe<Scalars['String']>;
  password_starts_with?: Maybe<Scalars['String']>;
  resetExpires?: Maybe<Scalars['DateTime']>;
  resetExpires_gt?: Maybe<Scalars['DateTime']>;
  resetExpires_gte?: Maybe<Scalars['DateTime']>;
  resetExpires_in?: Maybe<Array<Scalars['DateTime']>>;
  resetExpires_lt?: Maybe<Scalars['DateTime']>;
  resetExpires_lte?: Maybe<Scalars['DateTime']>;
  resetExpires_not?: Maybe<Scalars['DateTime']>;
  resetExpires_not_in?: Maybe<Array<Scalars['DateTime']>>;
  resetToken?: Maybe<Scalars['String']>;
  resetToken_contains?: Maybe<Scalars['String']>;
  resetToken_ends_with?: Maybe<Scalars['String']>;
  resetToken_gt?: Maybe<Scalars['String']>;
  resetToken_gte?: Maybe<Scalars['String']>;
  resetToken_in?: Maybe<Array<Scalars['String']>>;
  resetToken_lt?: Maybe<Scalars['String']>;
  resetToken_lte?: Maybe<Scalars['String']>;
  resetToken_not?: Maybe<Scalars['String']>;
  resetToken_not_contains?: Maybe<Scalars['String']>;
  resetToken_not_ends_with?: Maybe<Scalars['String']>;
  resetToken_not_in?: Maybe<Array<Scalars['String']>>;
  resetToken_not_starts_with?: Maybe<Scalars['String']>;
  resetToken_starts_with?: Maybe<Scalars['String']>;
  roles_every?: Maybe<RoleWhereInput>;
  roles_none?: Maybe<RoleWhereInput>;
  roles_some?: Maybe<RoleWhereInput>;
  settings_every?: Maybe<SettingWhereInput>;
  settings_none?: Maybe<SettingWhereInput>;
  settings_some?: Maybe<SettingWhereInput>;
  subscription?: Maybe<StripeSubscriptionWhereInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedBy?: Maybe<UserWhereInput>;
};
export type AddProductMutationVariables = {
  name: Scalars['String'];
  type: ProductTypeType;
};

export type AddProductMutation = {__typename?: 'Mutation'} & {
  addProduct: {__typename?: 'StripeProductPayload'} & Pick<
    StripeProductPayload,
    'name' | 'type' | 'stripeId'
  >;
};

export type ConfirmAccountMutationVariables = {
  email: Scalars['String'];
  emailConfirmToken: Scalars['String'];
};

export type ConfirmAccountMutation = {__typename?: 'Mutation'} & {
  confirmAccount: {__typename?: 'AuthPayload'} & Pick<AuthPayload, 'token'> & {
      user: {__typename?: 'User'} & Pick<
        User,
        'email' | 'firstName' | 'lastName' | 'emailConfirmed'
      >;
    };
};

export type LoginMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginMutation = {__typename?: 'Mutation'} & {
  login: {__typename?: 'AuthPayload'} & Pick<AuthPayload, 'token'> & {
      user: {__typename?: 'User'} & Pick<
        User,
        'firstName' | 'lastName' | 'email' | 'emailConfirmed'
      >;
    };
};

export type ResetPasswordMutationVariables = {
  email: Scalars['String'];
  newPassword: Scalars['String'];
  resetToken: Scalars['String'];
};

export type ResetPasswordMutation = {__typename?: 'Mutation'} & {
  resetPassword: {__typename?: 'UserIdPayload'} & Pick<UserIdPayload, 'id'>;
};

export type SignUpMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type SignUpMutation = {__typename?: 'Mutation'} & {
  signup: {__typename?: 'AuthPayload'} & Pick<AuthPayload, 'token'>;
};

export type TriggerAccountConfirmationEmailMutationVariables = {
  email: Scalars['String'];
};

export type TriggerAccountConfirmationEmailMutation = {
  __typename?: 'Mutation';
} & {
  triggerAccountConfirmationEmail: {__typename?: 'TriggerEmailPayload'} & Pick<
    TriggerEmailPayload,
    'ok'
  >;
};

export type TriggerPasswordResetMutationVariables = {
  email: Scalars['String'];
};

export type TriggerPasswordResetMutation = {__typename?: 'Mutation'} & {
  triggerPasswordReset: {__typename?: 'TriggerEmailPayload'} & Pick<
    TriggerEmailPayload,
    'ok'
  >;
};

export type CurrentUserQueryVariables = {};

export type CurrentUserQuery = {__typename?: 'Query'} & {
  currentUser: {__typename?: 'User'} & Pick<
    User,
    'firstName' | 'lastName' | 'email' | 'emailConfirmed'
  >;
};

import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';
import * as ReactApolloHooks from 'react-apollo-hooks';

export const AddProductDocument = gql`
  mutation AddProduct($name: String!, $type: ProductTypeType!) {
    addProduct(name: $name, type: $type) {
      name
      type
      stripeId
    }
  }
`;

export class AddProductComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<AddProductMutation, AddProductMutationVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<AddProductMutation, AddProductMutationVariables>
        mutation={AddProductDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}

export function useAddProductMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    AddProductMutation,
    AddProductMutationVariables
  >,
) {
  return ReactApolloHooks.useMutation<
    AddProductMutation,
    AddProductMutationVariables
  >(AddProductDocument, baseOptions);
}
export const ConfirmAccountDocument = gql`
  mutation ConfirmAccount($email: String!, $emailConfirmToken: String!) {
    confirmAccount(email: $email, emailConfirmToken: $emailConfirmToken) {
      token
      user {
        email
        firstName
        lastName
        emailConfirmed
      }
    }
  }
`;

export class ConfirmAccountComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      ConfirmAccountMutation,
      ConfirmAccountMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        ConfirmAccountMutation,
        ConfirmAccountMutationVariables
      >
        mutation={ConfirmAccountDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}

export function useConfirmAccountMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    ConfirmAccountMutation,
    ConfirmAccountMutationVariables
  >,
) {
  return ReactApolloHooks.useMutation<
    ConfirmAccountMutation,
    ConfirmAccountMutationVariables
  >(ConfirmAccountDocument, baseOptions);
}
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        firstName
        lastName
        email
        emailConfirmed
      }
    }
  }
`;

export class LoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LoginMutation, LoginMutationVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LoginMutation, LoginMutationVariables>
        mutation={LoginDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}

export function useLoginMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  return ReactApolloHooks.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions,
  );
}
export const ResetPasswordDocument = gql`
  mutation ResetPassword(
    $email: String!
    $newPassword: String!
    $resetToken: String!
  ) {
    resetPassword(
      email: $email
      newPassword: $newPassword
      resetToken: $resetToken
    ) {
      id
    }
  }
`;

export class ResetPasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      ResetPasswordMutation,
      ResetPasswordMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        ResetPasswordMutation,
        ResetPasswordMutationVariables
      >
        mutation={ResetPasswordDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}

export function useResetPasswordMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >,
) {
  return ReactApolloHooks.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, baseOptions);
}
export const SignUpDocument = gql`
  mutation SignUp(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    signup(
      data: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      token
    }
  }
`;

export class SignUpComponent extends React.Component<
  Partial<ReactApollo.MutationProps<SignUpMutation, SignUpMutationVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<SignUpMutation, SignUpMutationVariables>
        mutation={SignUpDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}

export function useSignUpMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >,
) {
  return ReactApolloHooks.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    baseOptions,
  );
}
export const TriggerAccountConfirmationEmailDocument = gql`
  mutation TriggerAccountConfirmationEmail($email: String!) {
    triggerAccountConfirmationEmail(email: $email) {
      ok
    }
  }
`;

export class TriggerAccountConfirmationEmailComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      TriggerAccountConfirmationEmailMutation,
      TriggerAccountConfirmationEmailMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        TriggerAccountConfirmationEmailMutation,
        TriggerAccountConfirmationEmailMutationVariables
      >
        mutation={TriggerAccountConfirmationEmailDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}

export function useTriggerAccountConfirmationEmailMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    TriggerAccountConfirmationEmailMutation,
    TriggerAccountConfirmationEmailMutationVariables
  >,
) {
  return ReactApolloHooks.useMutation<
    TriggerAccountConfirmationEmailMutation,
    TriggerAccountConfirmationEmailMutationVariables
  >(TriggerAccountConfirmationEmailDocument, baseOptions);
}
export const TriggerPasswordResetDocument = gql`
  mutation TriggerPasswordReset($email: String!) {
    triggerPasswordReset(email: $email) {
      ok
    }
  }
`;

export class TriggerPasswordResetComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      TriggerPasswordResetMutation,
      TriggerPasswordResetMutationVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        TriggerPasswordResetMutation,
        TriggerPasswordResetMutationVariables
      >
        mutation={TriggerPasswordResetDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}

export function useTriggerPasswordResetMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    TriggerPasswordResetMutation,
    TriggerPasswordResetMutationVariables
  >,
) {
  return ReactApolloHooks.useMutation<
    TriggerPasswordResetMutation,
    TriggerPasswordResetMutationVariables
  >(TriggerPasswordResetDocument, baseOptions);
}
export const CurrentUserDocument = gql`
  query CurrentUser {
    currentUser {
      firstName
      lastName
      email
      emailConfirmed
    }
  }
`;

export class CurrentUserComponent extends React.Component<
  Partial<ReactApollo.QueryProps<CurrentUserQuery, CurrentUserQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<CurrentUserQuery, CurrentUserQueryVariables>
        query={CurrentUserDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}

export function useCurrentUserQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<CurrentUserQueryVariables>,
) {
  return ReactApolloHooks.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    baseOptions,
  );
}
