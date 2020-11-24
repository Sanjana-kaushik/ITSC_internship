import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Card } from 'reactstrap';

import avatar1 from '../assets/images/avatars/avatar1.jpg';
import avatar2 from '../assets/images/avatars/avatar2.jpg';
import avatar3 from '../assets/images/avatars/avatar3.jpg';
import avatar4 from '../assets/images/avatars/avatar4.jpg';
import avatar5 from '../assets/images/avatars/avatar5.jpg';
import avatar6 from '../assets/images/avatars/avatar6.jpg';
import avatar7 from '../assets/images/avatars/avatar7.jpg';

const Photo = () =>
  <Fragment>
    <Card className="card-box mb-5 p-3 text-center">
      <div className="my-3">
        <h6 className="font-weight-bold font-size-lg mb-1 text-black">
          Photo Gallery
        </h6>
        <p className="text-black-50 mb-0">
          Photo display gallery.
        </p>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        <div className="position-relative px-5 py-3">
          <div className="divider-v divider-v-lg" />
          <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
            <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
              <div className="rounded-circle overflow-hidden">
                <img alt="..." className="img-fluid" src={avatar1} />
              </div>
            </div>
          </div>
          <div className="font-weight-bold mt-1">Andrea Potter</div>
          <div className="font-weight-bold font-size-sm text-black-50">
            <FontAwesomeIcon
              icon={[ `fas` ]}
              className="text-warning mr-1"
            />
            <span>Loves to cook</span>
            <span className="px-1">|</span>
            Software development track
          </div>
        </div>
        <div className="position-relative px-5 py-3">
          <div className="divider-v divider-v-lg" />
          <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
            <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
              <div className="rounded-circle overflow-hidden">
                <img alt="..." className="img-fluid" src={avatar2} />
              </div>
            </div>
          </div>
          <div className="font-weight-bold mt-1">Hanna Dev</div>
          <div className="font-weight-bold font-size-sm text-black-50">
            <FontAwesomeIcon
              icon={[ `fas` ]}
              className="text-warning mr-1"
            />
            <span>Sustainable living is her goal</span>
            <span className="px-1">|</span>
            Web development tract
          </div>
        </div>
        <div className="position-relative px-5 py-3">
          <div className="divider-v divider-v-lg" />
          <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
            <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
              <div className="rounded-circle overflow-hidden">
                <img alt="..." className="img-fluid" src={avatar3} />
              </div>
            </div>
          </div>
          <div className="font-weight-bold mt-1">Ellie Goulding</div>
          <div className="font-weight-bold font-size-sm text-black-50">
            <FontAwesomeIcon
              icon={[ `fas`]}
              className="text-warning mr-1"
            />
            <span>Won three hot dog eating contests</span>
            <span className="px-1">|</span>
            Data analytics track
          </div>
        </div>
        <div className="position-relative px-5 py-3">
          <div className="divider-v divider-v-lg" />
          <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
            <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
              <div className="rounded-circle overflow-hidden">
                <img alt="..." className="img-fluid" src={avatar4} />
              </div>
            </div>
          </div>
          <div className="font-weight-bold mt-1">Carrie Fischer</div>
          <div className="font-weight-bold font-size-sm text-black-50">
            <FontAwesomeIcon
              icon={[ `fas` ]}
              className="text-warning mr-1"
            />
            <span>President of the flat earth society</span>
            <span className="px-1">|</span>
            Game development track
          </div>
        </div>
        <div className="position-relative px-5 py-3">
          <div className="divider-v divider-v-lg" />
          <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
            <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
              <div className="rounded-circle overflow-hidden">
                <img alt="..." className="img-fluid" src={avatar5} />
              </div>
            </div>
          </div>
          <div className="font-weight-bold mt-1">Rodger Carter</div>
          <div className="font-weight-bold font-size-sm text-black-50">
            <FontAwesomeIcon
              icon={[ `fas` ]}
              className="text-warning mr-1"
            />
            <span>Professional skier</span>
            <span className="px-1">|</span>
            Cybersecurity track
          </div>
        </div>
        <div className="position-relative px-5 py-3">
          <div className="divider-v divider-v-lg" />
          <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
            <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
              <div className="rounded-circle overflow-hidden">
                <img alt="..." className="img-fluid" src={avatar6} />
              </div>
            </div>
          </div>
          <div className="font-weight-bold mt-1">Kushie Lav</div>
          <div className="font-weight-bold font-size-sm text-black-50">
            <FontAwesomeIcon
              icon={[ `fas`]}
              className="text-warning mr-1"
            />
            <span>Played Mulan in the 6th grade play</span>
            <span className="px-1">|</span>
            Research track
          </div>
        </div>
        <div className="position-relative px-5 py-3">
          <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
            <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
              <div className="rounded-circle overflow-hidden">
                <img alt="..." className="img-fluid" src={avatar7} />
              </div>
            </div>
          </div>
          <div className="font-weight-bold mt-1">Hayden Star</div>
          <div className="font-weight-bold font-size-sm text-black-50">
            <FontAwesomeIcon
              icon={[ `fas`]}
              className="text-warning mr-1"
            />
            <span>Built several websites in their free time</span>
            <span className="px-1">|</span>
            Web development track
          </div>
        </div>
      </div>
    </Card>
  </Fragment>;

export default Photo;
