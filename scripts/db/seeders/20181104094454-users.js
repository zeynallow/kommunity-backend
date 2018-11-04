import { User as Model } from '../../../src/models/sql';
import bulkPromise from '../utils/bulk-promise';

const items = [
  {
    uuid: '3346776a-d69d-11e8-9f8b-f2801f1b9fd1',
    email: 'test01@test.com',
    passwordHash: 'e10adc3949ba59abbe56e057f20f883e',
    firstName: 'Firstname',
    lastName: 'Lastname',
    userAttributes: '{"title":"Test Title"}',
    location: 'Turkey',
    avatarUploadUuid: '23ea1110-d6a1-11e8-9f8b-f2801f1b9fd1',
    lastSeenAt: new Date(),
    confirmedEmailAt: new Date(),
  },
  {
    uuid: '33467ba2-d69d-11e8-9f8b-f2801f1b9fd1',
    email: 'test02@test.com',
    passwordHash: 'e10adc3949ba59abbe56e057f20f883e',
    firstName: 'Firstname',
    lastName: 'Lastname',
    userAttributes: '{"title":"Test Title"}',
    location: 'Germany',
    avatarUploadUuid: '23ea0b02-d6a1-11e8-9f8b-f2801f1b9fd1',
    lastSeenAt: new Date(),
    confirmedEmailAt: new Date(),
  },
  {
    uuid: '33467fee-d69d-11e8-9f8b-f2801f1b9fd1',
    email: 'test03@test.com',
    passwordHash: 'e10adc3949ba59abbe56e057f20f883e',
    firstName: 'Firstname',
    lastName: 'Lastname',
    userAttributes: '{"title":"Test Title"}',
    location: 'United Kingdom',
    avatarUploadUuid: '23ea0530-d6a1-11e8-9f8b-f2801f1b9fd1',
    lastSeenAt: new Date(),
    confirmedEmailAt: new Date(),
  },
  {
    uuid: '33467a44-d69d-11e8-9f8b-f2801f1b9fd1',
    email: 'test04@test.com',
    passwordHash: 'e10adc3949ba59abbe56e057f20f883e',
    firstName: 'Firstname',
    lastName: 'Lastname',
    userAttributes: '{"title":"Test Title"}',
    location: 'Germany',
    avatarUploadUuid: '23fa0530-d6a1-11e8-9f8b-f2801f1b9fd1',
    lastSeenAt: new Date(),
    confirmedEmailAt: new Date(),
  },
  {
    uuid: '33467e86-d69d-11e8-9f8b-f2801f1b9fd1',
    email: 'test05@test.com',
    passwordHash: 'e10adc3949ba59abbe56e057f20f883e',
    firstName: 'Firstname',
    lastName: 'Lastname',
    userAttributes: '{"title":"Test Title"}',
    location: 'United Kingdom',
    avatarUploadUuid: null,
    lastSeenAt: null,
    confirmedEmailAt: null,
  },
  {
    uuid: '23e9da9c-d69d-11e8-9f8b-f2801f1b9fd1',
    email: 'test06@test.com',
    passwordHash: 'e10adc3949ba59abbe56e057f20f883e',
    firstName: 'Firstname',
    lastName: 'Lastname',
    userAttributes: '{"title":"Test Title"}',
    location: 'Turkey',
    avatarUploadUuid: null,
    lastSeenAt: null,
    confirmedEmailAt: null,
  },
];

module.exports = {
  up: () => bulkPromise(Model, items),
  down: () => {},
};
