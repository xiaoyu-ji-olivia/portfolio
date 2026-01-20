import React from "react";
import vr01 from '../assets/images/VR.jpg';
import vr02 from '../assets/images/VR_base.jpg';
import vr03 from '../assets/images/VR_lle.jpg';
import cryst01 from '../assets/images/crystal_mmsp.jpg';
import cryst02 from '../assets/images/crystal_icip.jpg';
import cryst03 from '../assets/images/crystal_under.jpg';
import lf01 from '../assets/images/Lateral_ST.jpg';
import lf02 from '../assets/images/Lateral_LM.jpg';
import boil01 from '../assets/images/Boild_seg.jpg';
import boil02 from '../assets/images/Boild_denoise.jpg';
import mri01 from '../assets/images/MRI_thesis.jpg';
import front01 from '../assets/images/front_exp.jpg';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Research Projects</h1>
        <div className="projects-grid">
            <h2> Microscopic Crystal Image Instance Segmentation</h2>
            <div className="project">
                <a href="https://doi.org/10.1109/MMSP61759.2024.10743276" target="_blank" rel="noreferrer"><img src={cryst01} className="zoom" alt="thumbnail" width="100%"/></a>
                <p> <b><big>Efficient Microscopic Image Instance Segmentation for Food Crystal Quality Control</big></b>
                     <br></br>
                   <small><b>Xiaoyu Ji</b>, Jan P Allebach, Ali Shakouri, and Fengqing Zhu. MMSP. 2024.
                    </small>
                    <br></br><br></br>
                    Estimated food crystal counts and sizes from microscope images containing sparsely distributed crystals alongside air dust and air bubbles. 
                    Proposed a multi-class, object detection based approach that achieves approximately a 5 times speedup in inference time while 
                    maintaining segmentation accuracy comparable to baseline methods. Deployed the model to a python UI interface.
                </p>
            </div>

            <div className="project">
                <a href="https://doi.org/10.1109/ICIP55913.2025.11084328" target="_blank" rel="noreferrer"><img src={cryst02} className="zoom" alt="thumbnail" width="100%"/></a>
                <p> <b><big>Confidence-Aware Agglomeration Classification And Segmentation Of 2D Microscopic Food Crystal Images</big></b>
                     <br></br>
                   <small><b>Xiaoyu Ji</b>, Ali Shakouri, and Fengqing Zhu. ICIP. 2025.
                    </small>
                    <br></br><br></br>
                    Agglomeration is a phenomenon affecting crystal product quality and can be observed in the middle stages of the manufacturing pipeline. 
                    In the microscopic images of samples collected from these stages, crystals are densely distributed and annotations are difficult to make. We propose a model 
                    for pseudo label generation and classify crystals into agglomerated and non-agglomerated with a two-step approach. Deployed the model to a streamlit interface.
                </p>
            </div>

            <div className="project">
                <a href="https://arxiv.org/pdf/2601.09004" target="_blank" rel="noreferrer"><img src={cryst03} className="zoom" alt="thumbnail" width="100%"/></a>
                <p> <b><big>Instance Camera Focus Prediction for Crystal Agglomeration Classification</big></b>
                     <br></br>
                   <small><b>Xiaoyu Ji</b>, Chenhao Zhang, Tyler James Downard, Zoltan Nagy, Ali Shakouri, and Fengqing Zhu. Under review.
                    </small>
                    <br></br><br></br>
                    Agglomeration refers to the process of crystal clustering and agglomeration detection is challenging due to the inherent 
                    limitations of two-dimensional imaging. Overlapping crystals may appear connected even when located at different depth layers.
                    We propose a camera focus model for focal level prediction and agglomeration classification that achieved 26.9% F1 accuracy increase from baseline. 
                </p>
            </div>


            <h2>VR Facial Expression Tracking</h2>
            <div className="project">
                <a href="https://doi.org/10.1109/ICMEW59549.2023.00046" target="_blank" rel="noreferrer"><img src={vr01} className="zoom" alt="thumbnail" width="100%"/></a>
                {/* <a href="https://doi.org/10.2352/EI.2022.34.8.IMAGE-255" target="_blank" rel="noreferrer"><h2>VR Facial Expression Tracking</h2></a> */}
                <p> <b><big>Classifier Guided Domain Adaptation for VR Facial Expression Tracking</big></b>
                     <br></br>
                   <small><b>Xiaoyu Ji</b>, Justin Yang, Jishang Wei, Yvonne Huang, Shibo Zhang, Qian Lin, Jan P Allebach, and Fengqing Zhu. 
                        ICMEW. 2023.
                    </small>
                    <br></br><br></br>Reenacted facial expressions of participants wearing VR headset to virtual characters.
                   Developed a VR facial expression tracking domain adaptation model with designed backpropagation steps and 
                   conducted subjective study evaluation. Synthetic data generated based on Unity. 
                   Data organization based on AWS S3 bucket and pandas.
                   
                </p>
            </div>

            <div className="project">
                <a href="https://doi.org/10.1109/ICMEW59549.2023.00047" target="_blank" rel="noreferrer"><img src={vr03} className="zoom" alt="thumbnail" width="100%"/></a>
                {/* <a href="https://doi.org/10.2352/EI.2022.34.8.IMAGE-255" target="_blank" rel="noreferrer"><h2>VR Facial Expression Tracking</h2></a> */}
                <p> <b><big>VR Facial Expression Tracking Using Locally Linear Embedding</big></b>
                     <br></br>
                   <small>Justin Yang, <b>Xiaoyu Ji</b>, Jishang Wei, Yvonne Huang, Shibo Zhang, Qian Lin, Jan P Allebach, and Fengqing Zhu. 
                        ICMEW. 2023.
                    </small>
                    <br></br><br></br>
                    To cluster predicted facial expressions from participants wearing VR headset, 
                    take advatage of local linear embeddings to benefit facial expression classification. 
                    Evaluated predicted expressions with subjective study across human identities. Deployed the model with ONNX.
                
                </p>
            </div>


            <div className="project">
                <a href="https://doi.org/10.2352/EI.2022.34.8.IMAGE-255" target="_blank" rel="noreferrer"><img src={vr02} className="zoom" alt="thumbnail" width="100%"/></a>
                <p> <b><big>VR facial expression tracking via action unit intensity regression model</big></b>
                     <br></br>
                   <small><b>Xiaoyu Ji</b>, Justin Yang, Jishang Wei, Yvonne Huang, Qian Lin, Jan P Allebach, and Fengqing Zhu. 
                    EI. 2022.
                    </small>
                    <br></br><br></br>For HP Reverb G2 Head-Mounted Displays, we developed a baseline regression model 
                    on single-view, partial occluded facial IR images. We also conducted review of facial expression tracking methods.
                </p>
            </div>

            <h2>Video Conference Face Frontalization Generation</h2>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={front01} className="zoom" alt="thumbnail" width="100%"/></a>
                <p> <b><big>Face Frontalization Enhancement and Gesture Preserving</big></b>
                     <br></br>
                   <small><b>Xiaoyu Ji</b>, Qian Lin, and Fengqing Zhu. 2022.
                    </small>
                    <br></br><br></br>
                    This project aims for generating front view human face talking video from a different view without using 3D face template. 
                    We improved GAN deep learning network architecture with skip connections to reserve hand region movement in video. 
                    We also corrected edge cases of shaking and nodding head motions reconstruction with temporal filtering.
                </p>
            </div>
            

            <h2> Lateral Flow Color Image Processing</h2>
            <div className="project">
                <a href="https://doi.org/10.1007/s00604-024-06633-5" target="_blank" rel="noreferrer"><img src={lf01} className="zoom" alt="thumbnail" width="100%"/></a>
                <p> <b><big>Application of a dual-modality colorimetric analysis method to inkjet printing lateral flow detection of Salmonella typhimurium</big></b>
                     <br></br>
                   <small>Ya-Ching Yu, Zhijian Wang, <b>Xiaoyu Ji</b>, Eric Jacob Williamson, Hansel Mina Cordoba, Ana M Ulloa-Gomez, Amanda J Deering, George T-C Chiu, Jan P Allebach, and Lia A Stanciu. 
                   Microchimica Acta. 2024.
                    </small>
                    <br></br><br></br>
                    Bacteria (Salmonella typhimurium) detection with lateral flow sensor. 
                    I have developed an image processing pipeline and taken charge of the image analysis of sensor images within the LA*B* color space.
                </p>
            </div>

            <div className="project">
                <a href="https://doi.org/10.1007/s00604-025-07795-6" target="_blank" rel="noreferrer"><img src={lf02} className="zoom" alt="thumbnail" width="100%"/></a>
                <p> <b><big>
            Rapid, quantitative lateral flow immunoassay using polystyrene-gold composite nanoparticles and CIELAB analysis for on-site detection of Listeria monocytogenes in food samples</big></b>
            <br></br>
                   <small>Zhijian Wang, Ya-Ching Yu, <b>Xiaoyu Ji</b>, Yixuan Ding, Amanda J Deering, George T-C Chiu, Jan P Allebach, Lia A Stanciu.
                    Microchimica Acta. 2026.
                    </small>
                    <br></br><br></br>
                    Bacteria (Listeria monocytogenes) detection with protein-based lateral flow sensor. 
                    Apart from image processing and color analysis, I have predicted 3D protein structure with Alphafold2 large language model.
                </p>
            </div>

            <h2> Boiling Image Segmentation and Denoising</h2>
            <div className="project">
                <a href="https://doi.org/10.2139/ssrn.5914773" target="_blank" rel="noreferrer"><img src={boil01} className="zoom" alt="thumbnail" width="100%"/></a>
                <p> <b><big>
                Applying Computer Vision to Flow Boiling Analysis: Feature Extraction and Data-Driven Heat Transfer Coefficient Prediction</big></b>
            <br></br>
                   <small>Chirag Kharangate, Forouzan Naderi, <b>Xiaoyu Ji</b>, Jaychandran Narayanan, Farshad Barghi Golezani, Chenhao Zhang, Logan M Pirnstill, and Fengqing Zhu.
                   SSRN. 2025.
                    </small>
                    <br></br><br></br>
                    Flow boiling heat transfer analysis with single-view images. Developed a patch-wise background removed instance segmentation method for vapor analysis.
                </p>
            </div>

            <div className="project">
                <a href="https://doi.org/10.48550/arXiv.2510.03452" target="_blank" rel="noreferrer"><img src={boil02} className="zoom" alt="thumbnail" width="100%"/></a>
                <p> <b><big>
                Denoising of Two-Phase Optically Sectioned Structured Illumination Reconstructions Using Encoder-Decoder Networks
                </big></b>
            <br></br>
                   <small>Allison Davis, Yezhi Shen, <b>Xiaoyu Ji</b>, and Fengqing Zhu. Under review.
                    </small>
                    <br></br><br></br>
                    Pool boiling structure illumination two phase image denoising with Unet architecture. 
                    Generated synthetic data and conducted denoising experiments.
                </p>
            </div>

            <h2> MRI Brain Image Segmentation and Analysis</h2>
            <div className="project">
                <a href="https://docs.lib.purdue.edu/dissertations/AAI30504601/" target="_blank" rel="noreferrer"><img src={mri01} className="zoom" alt="thumbnail" width="100%"/></a>
                <p> <b><big>
                Effects on Seed-Based Resting State fMRI of One Season of Exposure to Middle School and High School Football Subconcussive Head Accelerations
                </big></b>
            <br></br>
                   <small> <b>Xiaoyu Ji</b>, and Thomas Talavage. Mast Thesis. 2021.
                    </small>
                    <br></br><br></br>
                    This project analyzes the seed-based functional connectivity of resting state MRI images of football middle school players before and after season. 
                    We created a segmentation annotation dataset of brain MRI scans with AFNI interface. 
                    The statistical analysis dissected acceleration impact data and functional connectivity seed-based correlation with FSL and MATLAB language.
                </p>
            </div>

        </div>
    </div>
    );
}

export default Project;
