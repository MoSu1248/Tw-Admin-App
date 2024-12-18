import { motion } from "framer-motion";
import BackDrop from "./EditClientBackdrop";

import './editPop.css'

const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  

const EditClientModal = ({ handleClose,  appointment_id }) => {

    return (
      <BackDrop onClick={handleClose} appointment_id={appointment_id} >
          <motion.div
            onClick={(e) => e.stopPropagation()}  
            className="modal orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
          </motion.div>
      </BackDrop>
    );
  };

  
  export default EditClientModal;