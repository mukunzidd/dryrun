import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import app from './index';

chai.use(chaiHTTP);

describe('Tests the API', () => {
  it('Checks the status of the API', () => {
    chai
      .request(app)
      .get('/status')
      .end((err, res) => {
        expect(res.status).equals(200);
        expect(res.body.message).equals('API running...');
        expect(res.body).to.be.an('object');
      });
  });
  it('GET /users route', () => {
    chai
      .request(app)
      .get('/users')
      .end((err, res) => {
        expect(res.status).equals(200);
        expect(res.body.message).equals('Success');
        expect(res.body).to.be.an('object');
        expect(res.body.data).to.be.an('array');
      });
  });
});
