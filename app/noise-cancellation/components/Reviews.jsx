"use client";

import Image from "next/image";
import Link from "next/link";

const Reviews = () => {
  return (
    <div id="" className="">
      <div className="mx-auto py-20 md:px-12 max-w-screen-lx">
        <div className="p-6">
          <h1 className="reviews-heading text-center mb-8">
            Trusted by the world's best professionals
          </h1>
          <div className="reviews_scores mx-auto mt-32 flex items-center justify-between">
            <div className="ratings">
              <h4 className="mb-4 reviews-subheading text-blue-500">
                Customers love krisp
              </h4>
              <Image
                width={154}
                height={43}
                sizes="100vw"
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_g2_lg.svg"
                alt=""
              />
              <div className="rating_stars mt-4">
                <Image
                  width={195}
                  height={33}
                  sizes="100vw"
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_rating.svg"
                  alt=""
                />
                <div className="number-of-reviews-text mt-1">
                  543 reviews (4.8 out of 5){" "}
                </div>
              </div>
            </div>
            <div className="scores">
              <div className="score">
                <div className="score_number mb-5 mx-auto">
                  <strong className="text-blue-500 rating-number-text">
                    9.4
                  </strong>
                  <br />
                </div>
                <div className="ratings-text text-center">Ease of use</div>
              </div>
              <div className="score">
                <div className="score_number mb-5 mx-auto">
                  <strong className="text-blue-500 rating-number-text">
                    9.4
                  </strong>
                  <br />
                </div>
                <div className="ratings-text text-center">
                  Quality of support
                </div>
              </div>
              <div className="score">
                <div className="score_number mb-5 mx-auto">
                  <strong className="text-blue-500 rating-number-text">
                    9.4
                  </strong>
                  <br />
                </div>
                <div className="ratings-text text-center">Ease of setup</div>
              </div>
            </div>
          </div>
          <div className="text-center reviews-link text-blue-500 mt-10">
            <Link href={"#"}>Read more user reviews</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
